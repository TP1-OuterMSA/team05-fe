import { useEffect, useState } from "react";
import * as S from "../styles/Home/ReviewTodayComponentStyle";
import Star from "../components/Star";
import { getTodayReview } from "../api/viewReview";

// 타입 정의
interface MenuReviews {
	menuName: string;
	averageRating: number;
	aiQuestion: string | null;
	userResponses: string[];
}

const ReviewToday = () => {
	const [selectedCategory, setSelectedCategory] = useState("전체");
	const [menuOptions, setMenuOptions] = useState<string[]>([]);
	const [selectedMenu, setSelectedMenu] = useState<string>("전체");
	const [sortOption, setSortOption] = useState("최신순");
	const [participants, setParticipants] = useState(0);
	const [averageScore, setAverageScore] = useState(0.0);

	const [reviews, setReviews] = useState<string[]>([]);
	const [menuReviews, setMenuReviews] = useState<MenuReviews[]>([]);
	const [date, setDate] = useState<string>();

	// 리뷰 더미 데이터
	useEffect(() => {
		if (selectedCategory == "전체") setMenuOptions(["전체"]);

		const handleFetchTodayReview = async () => {
			const today = new Date();
			setDate(today.toISOString().slice(0, 10));
			try {
				if (selectedCategory == "전체") {
					const categories = ["BREAKFAST", "LUNCH", "DINNER"];
					const promises = categories.map((cat) => getTodayReview(today.toISOString().slice(0, 10), cat));

					try {
						const results = await Promise.all(promises);

						// 2) 각 결과 파싱
						const allData = results.map(res => res.result);

						// 3) 참여 인원 합산
						const totalParticipants = allData.reduce((acc, cur) => acc + cur.reviewCount, 0);

						// 4) 평균 점수 계산 (각 평균 점수의 산술평균)
						const validRatings = allData
							.map((cur) => cur.overallAverageRating)
							.filter((rating) => rating > 0);

						const averageRating =
							validRatings.length > 0
								? validRatings.reduce((acc, cur) => acc + cur, 0) / validRatings.length
								: 0;


						// 5) 리뷰 모두 합치기 (최신순으로 보고 싶으면 적절히 정렬)
						const allReviews = allData.flatMap(data => data.overallOpinions);
						// 필요 시 reverse나 정렬 가능
						// 최신순으로 표시하려면
						const sortedReviews = allReviews.slice().reverse();

						// 6) 상태 업데이트
						setParticipants(totalParticipants);
						setAverageScore(Number(averageRating.toFixed(1)));
						setReviews(sortedReviews);

					} catch (error) {
						console.error(error);
					}
				} else {
					const mealType = selectedCategory == "조식" ? "BREAKFAST" : selectedCategory == "중식" ? "LUNCH" : selectedCategory == "석식" ? "DINNER" : "BREAKFAST";
					const response = await getTodayReview(today.toISOString().slice(0, 10), mealType);
					const data = response.result;
					setMenuOptions(["전체", ...data.menuReviews.map((menu: { menuName: string; }) => menu.menuName)]);
					setParticipants(data.reviewCount);
					setAverageScore(data.overallAverageRating.toFixed(1) * 1);
					setMenuReviews(data.menuReviews);
					const allResponses = data.menuReviews
						.flatMap((menu: { userResponses: string; }) => menu.userResponses)

					setReviews(allResponses);
				}

			} catch (error) { throw error; }
		}
		handleFetchTodayReview();
		setSelectedMenu("전체");
	}, [selectedCategory]);

	useEffect(() => {
		setSortOption("최신순");
	}, [selectedCategory, selectedMenu]);

	useEffect(() => {
		if (selectedMenu !== "전체") {
			const reversedResponses = menuReviews
				.find((menu) => menu.menuName === selectedMenu)?.userResponses
				.slice() // 복사
				.reverse(); // 최신순 정렬

			setReviews(reversedResponses ?? []);
			return;
		}
		const reverseReview = reviews.slice().reverse();
		setReviews(reverseReview);
	}, [sortOption])

	return (
		<S.Container>
			<S.FilterBox>
				<div>
					<S.Label>학식 종류 선택</S.Label>
					<S.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
						<option>전체</option>
						<option>조식</option>
						<option>중식</option>
						<option>석식</option>
					</S.Select>
				</div>
				<div>
					<S.Label>메뉴 선택</S.Label>
					<S.Select value={selectedMenu} onChange={(e) => setSelectedMenu(e.target.value)}>
						{menuOptions.map((menu, index) => (
							<option key={index}>{menu}</option>
						))}
					</S.Select>
				</div>
				<div>
					<S.Label>정렬 방식 선택</S.Label>
					<S.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
						<option>최신순</option>
						<option>늦은순</option>
					</S.Select>
				</div>
			</S.FilterBox>

			<S.ReviewSummary>
				<S.ParticipantHeader>
					리뷰 참여 인원 <span>{participants}명</span>
				</S.ParticipantHeader>

				{selectedCategory === "전체" ? (
					<>
						<S.StarRow>
							<span>전체 총 평점</span>
							<Star rating={averageScore} onChangeRating={() => { }} />
							<span>{averageScore}점</span>
						</S.StarRow>
					</>) : selectedMenu === "전체" ? (
						<>
							{menuReviews.map((menu) => (
								<S.StarRow key={menu.menuName}>
									<span>{menu.menuName} 총 평점</span>
									<Star rating={menu.averageRating} onChangeRating={() => { }} />
									<span>{menu.averageRating.toFixed(1)}점</span>
								</S.StarRow>
							))}
						</>
					) : (
					<>
						{menuReviews.filter((menu) => menu.menuName === selectedMenu).map((menu) => (
							<div key={menu.menuName}>
								<S.StarRow>
									<span>{menu.menuName} 총 평점</span>
									<Star rating={menu.averageRating} onChangeRating={() => { }} />
									<span>{menu.averageRating.toFixed(1)}점</span>
								</S.StarRow>

								{/* AI 질문 영역 */}
								{menu.aiQuestion && (
									<>
										<S.AIQuestionTitle>{menu.menuName}에 대한 AI 질문</S.AIQuestionTitle>
										<S.AIQuestionBox>
											<p><strong>Q. {menu.aiQuestion}</strong></p>
										</S.AIQuestionBox>
									</>
								)}
							</div>
						))}
					</>
				)}
			</S.ReviewSummary>

			<S.ReviewListTitle>
				{selectedCategory} {selectedMenu === "전체" ? "" : selectedMenu} 리뷰
			</S.ReviewListTitle>

			<S.ReviewList>
				{selectedMenu == "전체" ?
					<>
						{reviews.map((review, index) => (
							<S.ReviewItem key={index}>
								<S.ReviewMeta>익명 | {date}</S.ReviewMeta>
								<S.ReviewText>{review}</S.ReviewText>
							</S.ReviewItem>
						))}
					</> :
					<>{
						sortOption == "최신순" ?
							<>{
								menuReviews.find((menu) => menu.menuName === selectedMenu)?.userResponses
									.map((review, index) => (
										<S.ReviewItem key={index}>
											<S.ReviewMeta>익명 | {date}</S.ReviewMeta>
											<S.ReviewText>{review}</S.ReviewText>
										</S.ReviewItem>
									))
							}</> : <>{
								menuReviews.find((menu) => menu.menuName === selectedMenu)?.userResponses.slice().reverse()
									.map((review, index) => (
										<S.ReviewItem key={index}>
											<S.ReviewMeta>익명 | {date}</S.ReviewMeta>
											<S.ReviewText>{review}</S.ReviewText>
										</S.ReviewItem>
									))
							}</>
					}

					</>}
			</S.ReviewList>
		</S.Container>
	);
};

export default ReviewToday;
