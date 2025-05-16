import * as S from '../../styles/layout/HeaderStyle';
import Logo from '../../assets/images/team5/Logo.svg';
import Ghost from "../../assets/images/team5/ghost_btn_icon.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	return (
		<S.HeaderContainer>
			<S.Inner>
				<S.LogoImg src={Logo} alt="logo" onClick={() => navigate('/team5')} />
				<S.QuizBtn
					style={{
						backgroundColor: "white",
						border: "0.7px solid red",
						color: "red",
					}}
					onClick={() => navigate('/team5/admin/quizInput')}
				>
					<img
						style={{ width: "23px", marginRight: "5px" }}
						src={Ghost}
					/>
					관리자 페이지
				</S.QuizBtn>
				<S.QuizBtn style={{ backgroundColor: "#8094B3" }} onClick={() => navigate('/team5/foodList')}><img style={{ width: "23px", marginRight: "5px" }} src={Ghost} />맛집</S.QuizBtn>
				<S.QuizBtn style={{ backgroundColor: "rgb(235, 192, 0)" }} onClick={() => navigate('/team5/guessRate')}><img style={{ width: "23px", marginRight: "5px" }} src={Ghost} />골든벨 Quiz</S.QuizBtn>
				<S.QuizBtn onClick={() => navigate('/team5/quiz')}><img style={{ width: "23px", marginRight: "5px" }} src={Ghost} />Quiz</S.QuizBtn>
				<S.QuizBtn onClick={() => navigate('/team5/ranking')}><img style={{ width: "23px", marginRight: "5px" }} src={Ghost} />Ranking</S.QuizBtn>
				{/* <S.Text>{isMobile ? "홍길동님" : "홍길동님 환영합니다"}</S.Text>
				<S.LoginBtn>
					<S.LoginImg src={LoginIcon} />
					프로필
				</S.LoginBtn> */}
			</S.Inner>
		</S.HeaderContainer>
	);
};

export default Header;
