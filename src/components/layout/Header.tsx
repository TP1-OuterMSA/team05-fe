import * as S from '../../styles/layout/HeaderStyle';
import Logo from '../../assets/images/team5/Logo.svg';
import Menu from "../../assets/images/team5/Menu.png";
import Ghost from "../../assets/images/team5/ghost_btn_icon.png";
import LoginIcon from "../../assets/images/team5/LoginIcon.png";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
	const navigate = useNavigate();
	const [isMobile, setIsMobile] = useState(false);
  
	useEffect(() => {
	  const handleResize = () => {
		setIsMobile(window.innerWidth <= 850);
	  };
  
	  handleResize(); // 초기 실행
	  window.addEventListener("resize", handleResize); // 리사이즈 시 실행
	  return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<S.HeaderContainer>
			<S.Inner>
				<S.MenuImg src={Menu} />
				<S.LogoImg src={Logo} alt="logo" onClick={() => navigate('/team5')} />
				<S.QuizBtn onClick={() => navigate('/team5/quiz')}><img style={{ width: "23px", marginRight: "5px" }} src={Ghost} />Quiz</S.QuizBtn>
				<S.QuizBtn onClick={() => navigate('/team5/ranking')}><img style={{ width: "23px", marginRight: "5px" }} src={Ghost} />Ranking</S.QuizBtn>
				<S.Text>{isMobile ? "홍길동님" : "홍길동님 환영합니다"}</S.Text>
				<S.LoginBtn>
					<S.LoginImg src={LoginIcon} />
					프로필
				</S.LoginBtn>
			</S.Inner>
		</S.HeaderContainer>
	);
};

export default Header;
