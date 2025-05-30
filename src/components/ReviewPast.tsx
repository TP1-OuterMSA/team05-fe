import { useEffect, useState } from "react";
import * as S from "../styles/Home/ReviewPastComponentStyle";
import Star from "../components/Star";

interface Review {
	id: number;
	author: string;
	date: string;
	content: string;
}

const ReviewPast = () => {
	const [selectedCategory, setSelectedCategory] = useState("조식");
	const [sortOption, setSortOption] = useState("별점순");
	const [averageScore, setAverageScore] = useState(4.1);
	const [participants, setParticipants] = useState(10000);
	const [reviews, setReviews] = useState<Review[]>([]);

	useEffect(() => {
		// API 대체 예정 더미 데이터
		const dummyReviews: Review[] = [
			{
				id: 1,
				author: "익명",
				date: "2024-05-29",
				content:
					"전체적으로 맛있었습니다. 엄마의 손맛이 느껴졌어요. 전체적으로 맛있었습니다. 엄마의 손맛이 느껴졌어요.",
			},
			{
				id: 2,
				author: "익명",
				date: "2024-05-29",
				content: "비주얼도 좋고, 정성스러운 느낌이 들었습니다.",
			},
			{
				id: 3,
				author: "익명",
				date: "2024-05-29",
				content: "조금 짰지만 맛있었습니다. 다음엔 덜 짜면 좋겠어요.",
			},
			{
				id: 4,
				author: "익명",
				date: "2024-05-29",
				content: "밥의 양이 많아서 좋았어요. 반찬 조합도 훌륭했습니다.",
			},
		];
		setReviews(dummyReviews);
	}, []);

	return (
		<S.Container>

			<S.FilterBox>
				<div>
					<S.Label>학식종류 선택</S.Label>
					<S.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>

						<option>조식</option>
						<option>중식</option>
						<option>석식</option>
					</S.Select>
				</div>
				<div>
					<S.Label>정렬방식 선택</S.Label>
					<S.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
						<option>별점순</option>
						<option>낮은순</option>
					</S.Select>
				</div>
			</S.FilterBox>

			<S.ReviewSummary>
				<S.Participant>
					리뷰 참여 인원 <span>{participants.toLocaleString()}명</span>
				</S.Participant>
				<S.AverageBox>
					우리 학교 {selectedCategory}의 총 평점
					<Star rating={averageScore} onChangeRating={() => { }} />
					<span>{averageScore.toFixed(1)}점</span>
				</S.AverageBox>
			</S.ReviewSummary>

			<S.ReviewListTitle>{selectedCategory} 전체 리뷰</S.ReviewListTitle>

			<S.ReviewList>
				{reviews.map((review) => (
					<S.ReviewItem key={review.id}>
						<S.ReviewMeta>{review.author} | {review.date}</S.ReviewMeta>
						<S.ReviewText>{review.content}</S.ReviewText>
					</S.ReviewItem>
				))}
			</S.ReviewList>
		</S.Container>
	);
};

export default ReviewPast;
