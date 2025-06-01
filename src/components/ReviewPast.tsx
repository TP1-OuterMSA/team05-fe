import { useEffect, useState } from "react";
import * as S from "../styles/Home/ReviewPastComponentStyle";
import Star from "../components/Star";
import { getLastReview } from "../api/viewReview";

const ReviewPast = () => {
	const [selectedCategory, setSelectedCategory] = useState("조식");
	const [sortOption, setSortOption] = useState("별점순");
	const [averageScore, setAverageScore] = useState(0.0);
	const [participants, setParticipants] = useState(0);
	const [reviews, setReviews] = useState<string[]>([]);

	useEffect(() => {
		const handleFetchPastReview = async () => {
			try {
				const response = await getLastReview(selectedCategory == "조식" ? "BREAKFAST" : selectedCategory == "중식" ? "LUNCH" : selectedCategory == "석식" ? "DINNER" : "BREAKFAST");
				const data = response.result;
				setParticipants(data.reviewCount);
				setAverageScore(data.overallAverageRating.toFixed(1) * 1);
				setReviews(data.overallOpinions.slice().reverse());
			} catch (error) { throw error; }
		}

		handleFetchPastReview();
	}, [selectedCategory]);

	const handleSort = (event: any) => {
		setSortOption(event);
		const reverseReview = reviews.slice().reverse();
		setReviews(reverseReview);
	}

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
					<S.Select value={sortOption} onChange={(e) => handleSort(e.target.value)}>
						<option>최신순</option>
						<option>오래된순</option>
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
				{reviews.map((review, index) => (
					<S.ReviewItem key={index}>
						<S.ReviewMeta>익명</S.ReviewMeta>
						<S.ReviewText>{review}</S.ReviewText>
					</S.ReviewItem>
				))}
			</S.ReviewList>
		</S.Container>
	);
};

export default ReviewPast;
