

import { useEffect, useState } from "react";
import * as S from "../styles/Home/WriteReviewComponentStyle";
import EachWriteReview from "./EachWriteReview";
import { getQuestions, getTodayMeal, postReview } from "../api/review";
import { getGPTQuestion } from "../utils/gpt";
import SubmitModal from "../components/modal/SubmitModal";
import { useNavigate } from "react-router-dom";

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

	useEffect(()=>{
		if(mealType=="조식") handleGetMeal("BREAKFAST");
		else if(mealType=="중식") handleGetMeal("LUNCH");
		else if(mealType=="석식") handleGetMeal("DINNER");
	}, [mealType])

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
			await postReview(
				todayMeal?.id ? todayMeal.id : 1,
				menuRatings,
				wholeReview,
				menuQuestions,
				menuAnswers,
				freeReview
			);
			console.log("성공");
		} catch (error) {
			throw error;
		}
	}
	
	useEffect(() => {
		if (todayMeal) {
			setReviewData(
				todayMeal.menuNames.map((menu) => ({
					menu,
					rating: 0,
					question: `${menu}의 질문 생성중...`,
					comment: "",
				}))
			);
		}
	}, [todayMeal]);

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
				return { [menu]: questionMap[menu] };
			});

			const results = await Promise.all(promises);
			const newQuestions = Object.assign({}, ...results);
			setQuestionMap((prev) => ({ ...prev, ...newQuestions }));
		};

		// 👇 useEffect 내부에서 실행
		fetchQuestionsInParallel();
	}, [mealType, todayMeal]);


	useEffect(() => {
		if (!todayMeal) return;

		const updatedReviewData = todayMeal.menuNames.map((menu) => ({
			menu,
			rating: 0,
			question: questionMap[menu] || `${menu}의 맛은 어땠나요?`,
			comment: "",
		}));

		setReviewData(updatedReviewData);
	}, [questionMap]);

	const handleConfirm = () => {
		setShowModal(false);
		navigate("/team5/review");
	};


	return (
		<>
			<S.ReviewDiv>
				<S.BigText>학식 종류 선택</S.BigText>
				<S.MealTypeDiv>
					<S.MealTypeLabel>
						<input type="radio" name="mealType" value="조식" checked={mealType === "조식"} onChange={() => { handleMealTypeChange("조식");}} style={{ marginRight: "15px" }} />
						<span>조식</span>
					</S.MealTypeLabel>
					<S.MealTypeLabel>
						<input type="radio" name="mealType" value="중식" onChange={() => { handleMealTypeChange("중식"); }} style={{ marginRight: "15px" }} />
						<span>중식</span>
					</S.MealTypeLabel>
					<S.MealTypeLabel>
						<input type="radio" name="mealType" value="석식" onChange={() => { handleMealTypeChange("석식");}} style={{ marginRight: "15px" }} />
						<span>석식</span>
					</S.MealTypeLabel>
				</S.MealTypeDiv>

				{noneMeal==""?
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
					</>:
					<><S.NoneMeal><p>오늘의 {noneMeal=="BREAKFAST"?"조식":noneMeal=="LUNCH"?"중식":"석식"}이 존재하지 않습니다.</p></S.NoneMeal></>
				}

			</S.ReviewDiv>
			{noneMeal==""?<S.SubmitBtn onClick={() => handleSubmitClick()}>제출하기</S.SubmitBtn>:<></>}
			{showModal && (
				<SubmitModal
					onClose={() => setShowModal(false)}
					onConfirm={handleConfirm}
				/>
			)}
		</>
	);

}

export default WriteReview;
