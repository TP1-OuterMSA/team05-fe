import { useLocation, useNavigate } from "react-router-dom";
import * as S from "../../styles/layout/TotalReviewLayoutStyle";
import ReviewToday from "../ReviewToday";
import ReviewPast from "../ReviewPast";

const ReviewLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const isMenuReview = location.pathname === "/team5/reviewToday";

	return (
		<S.ViewReviewContainer>
			<S.BtnDiv>
				<S.ReviewBtn
					$active={isMenuReview}
					onClick={() => navigate("/team5/reviewToday")}
				>
					오늘 리뷰
				</S.ReviewBtn>

				<S.WantMenuBtn
					$active={!isMenuReview}
					onClick={() => navigate("/team5/reviewPast")}
				>
					지난 리뷰
				</S.WantMenuBtn>
			</S.BtnDiv>

			{isMenuReview ? <ReviewToday /> : <ReviewPast />}
		</S.ViewReviewContainer>
	);
};

export default ReviewLayout;
