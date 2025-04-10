import { useState } from "react";
import * as S from "../styles/Home/ViewReviewPageStyle";
import WriteReview from "../components/WriteReivew";

const WriteReviewPage = () => {
	const [menu, setMenu] = useState<string>("메뉴 리뷰")

	return (
		<S.ViewReviewContainer>
			<S.BtnDiv>
				<S.ReviewBtn $menu={menu} onClick={() => { setMenu("메뉴 리뷰") }}>메뉴 리뷰</S.ReviewBtn>
				<S.WantMenuBtn $menu={menu} onClick={() => setMenu("먹고 싶은 메뉴")}>먹고 싶은 메뉴</S.WantMenuBtn>
			</S.BtnDiv>
			<WriteReview />
		</S.ViewReviewContainer>
	);
};

export default WriteReviewPage;
