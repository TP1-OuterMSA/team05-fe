import { useEffect, useState } from "react";
import * as S from "../styles/Home/ReviewTodayComponentStyle";
import Star from "../components/Star";

// 타입 정의
interface ReviewSummaryData {
	participants: number;
	totalAvg: number;
	menuRatings: Record<string, number>;
}

interface Review {
	id: number;
	author: string;
	date: string;
	content: string;
	category: string;
	menu: string;
}

interface AiQA {
	question: string;
	answer: string;
}

const ReviewToday = () => {
	const [selectedCategory, setSelectedCategory] = useState("전체");
	const [selectedMenu, setSelectedMenu] = useState("전체");
	const [sortOption, setSortOption] = useState("최신순");

	const [summary, setSummary] = useState<ReviewSummaryData>({
		participants: 90,
		totalAvg: 4.1,
		menuRatings: {
			전체: 4.1,
			돈까스: 4.2,
			김치찌개: 3.9,
			닭갈비: 4.0,
			"오징어&소세지볶음": 3.8,
		},
	});

	const [reviews, setReviews] = useState<Review[]>([]);
	const [aiQAs, setAiQAs] = useState<AiQA[]>([]);

	// 리뷰 더미 데이터
	useEffect(() => {
		const dummyReviews: Review[] = [
			{
				id: 1,
				author: "익명",
				date: "2024-05-30",
				content: "전체적으로 맛있었습니다. 엄마의 손맛이 느껴졌어요.",
				category: "조식",
				menu: "돈까스",
			},
			{
				id: 2,
				author: "익명",
				date: "2024-05-30",
				content: "반찬 구성이 다양하고 맛있었습니다. 다음에도 먹고 싶어요.",
				category: "조식",
				menu: "김치찌개",
			},
			{
				id: 3,
				author: "익명",
				date: "2024-05-30",
				content: "밥 양도 많고 배불렀어요!",
				category: "중식",
				menu: "닭갈비",
			},
		];
		setReviews(dummyReviews);
	}, []);

	// AI 질문+답변 불러오기 (selectedMenu가 바뀔 때마다)
	useEffect(() => {
		if (selectedMenu === "전체") {
			setAiQAs([]);
			return;
		}

		// 추후 실제 API 요청 부분
		// fetch(`/api/menus/${selectedMenu}/ai-questions`)
		//   .then(res => res.json())
		//   .then((data: AiQA[]) => setAiQAs(data))
		//   .catch(err => console.error("AI 질문 불러오기 실패", err));

		// 지금은 더미 데이터
		const dummyQAs: AiQA[] = [
			{
				question: `${selectedMenu}의 부족한 점은 무엇이었나요?`,
				answer: "조금 싱거웠어요.",
			},
			{
				question: `${selectedMenu}의 장점은 무엇인가요?`,
				answer: "고기가 많아서 좋았어요~~",
			},
		];

		setAiQAs(dummyQAs);
	}, [selectedMenu]);

	const filteredReviews = reviews.filter((review) => {
		if (selectedMenu === "전체") {
			return selectedCategory === "전체" || review.category === selectedCategory;
		}
		return (
			(selectedCategory === "전체" || review.category === selectedCategory) &&
			review.menu === selectedMenu
		);
	});

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
						<option>전체</option>
						<option>돈까스</option>
						<option>김치찌개</option>
						<option>닭갈비</option>
						<option>오징어&소세지볶음</option>
					</S.Select>
				</div>
				<div>
					<S.Label>정렬 방식 선택</S.Label>
					<S.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
						<option>최신순</option>
						<option>별점 높은 순</option>
						<option>별점 낮은 순</option>
					</S.Select>
				</div>
			</S.FilterBox>

			<S.ReviewSummary>
				<S.ParticipantHeader>
					리뷰 참여 인원 <span>{summary.participants}명</span>
				</S.ParticipantHeader>


				{selectedMenu === "전체" ? (
					Object.entries(summary.menuRatings).map(([menuName, rating]) =>
						menuName === "전체" ? null : (
							<S.StarRow key={menuName}>
								<span>{menuName} 총 평점</span>
								<Star rating={rating} onChangeRating={() => { }} />
								<span>{rating.toFixed(1)}점</span>
							</S.StarRow>
						)
					)
				) : (
					<>
						<S.StarRow>
							<span>{selectedMenu} 총 평점</span>
							<Star rating={summary.menuRatings[selectedMenu] ?? 0} onChangeRating={() => { }} />
							<span>{summary.menuRatings[selectedMenu]?.toFixed(1) ?? "-"}점</span>
						</S.StarRow>

						{/* AI 질문 영역 */}
						{aiQAs.length > 0 && (
							<>
								<S.AIQuestionTitle>{selectedMenu}에 대한 AI 질문</S.AIQuestionTitle>
								{aiQAs.map((qa, index) => (
									<S.AIQuestionBox key={index}>
										<p><strong>Q. {qa.question}</strong></p>
										<p>A. {qa.answer}</p>
									</S.AIQuestionBox>
								))}
							</>
						)}
					</>
				)}
			</S.ReviewSummary>

			<S.ReviewListTitle>
				{selectedCategory} {selectedMenu === "전체" ? "" : selectedMenu} 리뷰
			</S.ReviewListTitle>

			<S.ReviewList>
				{filteredReviews.map((review) => (
					<S.ReviewItem key={review.id}>
						<S.ReviewMeta>{review.author} | {review.date}</S.ReviewMeta>
						<S.ReviewText>{review.content}</S.ReviewText>
					</S.ReviewItem>
				))}
			</S.ReviewList>
		</S.Container>
	);
};

export default ReviewToday;
