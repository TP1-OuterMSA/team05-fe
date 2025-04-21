import { useLocation, useNavigate } from "react-router-dom";
import * as S from "../../styles/Home/ViewReviewPageStyle";
import WriteReview from "../WriteReview";
import WantedMenu from "../WantedMenu";

const ReviewLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const isMenuReview = location.pathname === "/team5/review";

	return (
		<S.ViewReviewContainer>
			<S.BtnDiv>
				<S.ReviewBtn
					$menu={isMenuReview ? "메뉴 리뷰" : ""}
					onClick={() => navigate('/team5/review')}
				>
					메뉴 리뷰
				</S.ReviewBtn>
				<S.WantMenuBtn
					$menu={!isMenuReview ? "먹고 싶은 메뉴" : ""}
					onClick={() => navigate('/team5/wantMenu')}
				>
					먹고 싶은 메뉴
				</S.WantMenuBtn>
			</S.BtnDiv>

			{isMenuReview ? <WriteReview /> : <WantedMenu />}
		</S.ViewReviewContainer>
	);
};

export default ReviewLayout;
