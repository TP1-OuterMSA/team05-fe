

import { useEffect, useState } from "react";
import * as S from "../styles/Home/WriteReviewComponentStyle";
import EachWriteReview from "./EachWriteReview";
import { getQuestions, getTodayMeal, postReview, postTestToken, postToken } from "../api/review";
import { getGPTQuestion } from "../utils/gpt";
import SubmitModal from "../components/modal/SubmitModal";
import { useNavigate } from "react-router-dom";
import QrScanner from "./QrScanner";

type MealType = "조식" | "중식" | "석식";

interface ReviewData {
	menu: string;
	rating: number;
	question: string;
	comment: string;
}
interface TodayMeal {
	dayInfo: string;
	id: number;
	mealType: string;
	menuNames: string[];
}

const WriteReview = () => {
	const [token, setToken] = useState<string>();
	const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
	const navigate = useNavigate();
	const [mealType, setMealType] = useState<MealType>("조식");
	const [noneMeal, setNoneMeal] = useState<string>("");
	const [todayMeal, setTodayMeal] = useState<TodayMeal>();
	const [wholeReview, setWholeReview] = useState<string>("");
	const [freeReview, setFreeReview] = useState<string>("");
	//식단에 대한 별점과 comment 저장할 것임으로 받아온 식단들을 list 형태로 묶어서 저장
	const [reviewData, setReviewData] = useState<ReviewData[]>([]);
	const [questionMap, setQuestionMap] = useState<{ [menu: string]: string }>({});
	const [showModal, setShowModal] = useState(false);


	//제출을 위해 처리하는 함수
	const handleSubmitClick = () => {
		const allFilled = reviewData.every((item) =>
			item.rating !== 0 && item.comment.trim() !== ""
		);
		const isWholeReviewFilled = wholeReview.trim() !== "";
		const isFreeReviewFilled = freeReview.trim() !== "";

		if (allFilled && isWholeReviewFilled && isFreeReviewFilled) {
			handlePostReview();
			setShowModal(true);
			//서버로 정보 넘기는 코드
		} else alert('모든 메뉴에 리뷰를 남겨주세요!');
	}

	//qr 확인 함수
	const handleQrScan = (result: string) => {
		if (isAuthorized) return;

		if (!result.startsWith("team5-toReviewQR")) {
			alert("올바른 QR 코드를 스캔해주세요.");
			return;
		}

		let isValid: boolean;

		const fetchToken = async () => {
			try {
				const response = await postToken(result);
				isValid = response.result;

				// ✅ 여기서 후속 로직 실행
				if (isValid) {
					setToken(result);
					setIsAuthorized(true);
				} else {
					setIsAuthorized(false);
					alert("이미 리뷰를 작성하셨습니다.");
				}
			} catch (error) {
				alert("QR 코드 검증 중 오류가 발생했습니다.");
			}
		};

		// ✅ 실제로 실행
		fetchToken();
	};





	//mealtype이 바뀔 때마다 식단 list 초기화
	const handleMealTypeChange = (type: MealType) => {
		setMealType(type);
		setReviewData(
			todayMeal?.menuNames.map((menu) => ({
				menu,
				rating: 0,
				question: `${menu}의 맛은 맛있었나요?`,
				comment: "",
			})) || []
		);
		setWholeReview("");
		setFreeReview("");
	}


	//질문 받아오고 mealtype 데이터 받아오기 함수
	const handleGetMeal = (selectedMeal: string) => {
		const fetchTodayMeal = async () => {
			try {
				const response = await getTodayMeal(selectedMeal);
				setTodayMeal(response.result);
				console.log(response.result);
			} catch (error) {
				setNoneMeal(selectedMeal);
				throw error;
			}
		};
		fetchTodayMeal();

		const fetchServerQuestions = async () => {
			const serverResponse = await getQuestions(selectedMeal); // BREAKFAST/LUNCH/DINNER
			const mapped = serverResponse.result.questions.reduce((acc: any, q: any) => {
				acc[q.menuName] = q.content;
				return acc;
			}, {});
			setQuestionMap(mapped); // 이미 있는 질문 저장
		};
		fetchServerQuestions();
	};

	//
	const fetchServerQuestions = async (mealType: 'BREAKFAST' | 'LUNCH' | 'DINNER') => {
		const serverResponse = await getQuestions(mealType);
		const mapped = serverResponse.result.questions.reduce((acc: any, q: any) => {
			acc[q.menuName] = q.content;
			return acc;
		}, {});
		setQuestionMap(mapped);
	};

	useEffect(() => {
		const run = async () => {
			let selected: 'BREAKFAST' | 'LUNCH' | 'DINNER' | null = null;
			if (mealType === "조식") selected = "BREAKFAST";
			else if (mealType === "중식") selected = "LUNCH";
			else if (mealType === "석식") selected = "DINNER";
			if (!selected) return;

			await handleGetMeal(selected); // todayMeal 설정
			await fetchServerQuestions(selected); // 서버 질문 불러오기
		};

		run();
	}, [mealType, close]);

	//실제 제출 함수
	const handlePostReview = async () => {
		const menuRatings: { [menu: string]: number } = {};
		const menuAnswers: { [menu: string]: string } = {};
		const menuQuestions: { [menu: string]: string } = {};

		reviewData.forEach((item) => {
			menuRatings[item.menu] = item.rating;
			menuQuestions[item.menu] = questionMap[item.menu] || item.question;
			menuAnswers[item.menu] = item.comment;

		});

		try {
			if (token) {
				await postReview(
					token,
					todayMeal?.id ? todayMeal.id : 1,
					menuRatings,
					wholeReview,
					menuQuestions,
					menuAnswers,
					freeReview
				);
				await postTestToken(token);
			}
			console.log("성공");
		} catch (error) {
			alert("리뷰 남기기에 실패했습니다.");
			throw error;
		}
	}

	//mealtype과 질문이 바꼈을때 질문 리스트 바꾸는 함수
	useEffect(() => {
		if (!todayMeal) return;

		setReviewData(
			todayMeal.menuNames.map((menu) => ({
				menu,
				rating: 0,
				question: questionMap[menu] || `${menu}의 질문 생성중...`,
				comment: "",
			}))
		);
	}, [todayMeal, questionMap]);

	//mealtype이 바꼈을 때 질문 생성 함수
	useEffect(() => {
		const fetchQuestionsInParallel = async () => {
			if (!todayMeal) return;

			const promises = todayMeal.menuNames.map(async (menu) => {
				if (!questionMap[menu]) {
					try {
						const question = await getGPTQuestion(menu);
						return { [menu]: question };
					} catch {
						return { [menu]: "❌ 질문 생성 실패" };
					}
				}
				return {}; // 이미 있는 질문은 새로 생성 안 함
			});

			const results = await Promise.all(promises);
			const newQuestions = Object.assign({}, ...results);
			setQuestionMap((prev) => ({ ...prev, ...newQuestions }));
		};

		fetchQuestionsInParallel();
	}, [todayMeal, close]);

	//모달에서 홈으로 가기 함수
	const handleConfirm = () => {
		setShowModal(false);
		navigate("/team5");
	};


	return (
		<>
			{!isAuthorized ? (
				<QrScanner isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} setToken={setToken} />
			) : (
				<>
					<S.ReviewDiv>
						<S.BigText>학식 종류 선택</S.BigText>
						<S.MealTypeDiv>
							<S.MealTypeLabel>
								<input type="radio" name="mealType" value="조식" checked={mealType === "조식"} onChange={() => { handleMealTypeChange("조식"); }} style={{ marginRight: "15px" }} />
								<span>조식</span>
							</S.MealTypeLabel>
							<S.MealTypeLabel>
								<input type="radio" name="mealType" value="중식" onChange={() => { handleMealTypeChange("중식"); }} style={{ marginRight: "15px" }} />
								<span>중식</span>
							</S.MealTypeLabel>
							<S.MealTypeLabel>
								<input type="radio" name="mealType" value="석식" onChange={() => { handleMealTypeChange("석식"); }} style={{ marginRight: "15px" }} />
								<span>석식</span>
							</S.MealTypeLabel>
						</S.MealTypeDiv>

						{noneMeal == "" ?
							<>
								<S.BigText>오늘의 메뉴 리뷰</S.BigText>
								<div>
									<S.Text>전체 메뉴 평가</S.Text>
									<S.WholeReviewInput placeholder="전체적인 메뉴에 대한 의견을 작성해주세요." value={wholeReview} onChange={(e) => setWholeReview(e.target.value)} />
								</div>

								<S.BigText style={{ fontSize: "23px" }}>개별 메뉴 평가</S.BigText>
								{reviewData.map((menu, index) => (
									<EachWriteReview
										key={index}
										menu={menu.menu}
										rating={menu.rating}
										question={menu.question}
										comment={menu.comment}
										onChangeRating={(newRating) => {
											const updated = [...reviewData];
											updated[index].rating = newRating;
											setReviewData(updated);
										}}
										onChangeComment={(newComment) => {
											const updated = [...reviewData];
											updated[index].comment = newComment;
											setReviewData(updated);
										}}
									/>
								))}

								<div>
									<S.Text>자유 의견</S.Text>
									<S.WholeReviewInput placeholder="추가 의견을 자유롭게 작성해주세요." value={freeReview} onChange={(e) => { setFreeReview(e.target.value) }} />
								</div>
							</> :
							<><S.NoneMeal><p>오늘의 {noneMeal == "BREAKFAST" ? "조식" : noneMeal == "LUNCH" ? "중식" : "석식"}이 존재하지 않습니다.</p></S.NoneMeal></>
						}

					</S.ReviewDiv>
					{noneMeal == "" ? <S.SubmitBtn onClick={() => handleSubmitClick()}>제출하기</S.SubmitBtn> : <></>}
					{showModal && (
						<SubmitModal
							onClose={() => setShowModal(false)}
							onConfirm={handleConfirm}
						/>
					)}
				</>)}
		</>
	);

}

export default WriteReview;
