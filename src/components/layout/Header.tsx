import { useEffect, useState } from 'react';
import * as S from '../../styles/layout/HeaderStyle';
import Logo from '../../assets/images/team5/Logo.svg';
import Ghost from '../../assets/images/team5/ghost_btn_icon.png';
import MenuIcon from '../../assets/images/team5/Menu.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const handleNavigate = (path: string) => {
		navigate(path);
		setIsSidebarOpen(false); // ✅ 이동 시 사이드바 닫기
	};

	useEffect(() => {
		if (isSidebarOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		// 컴포넌트가 unmount될 때도 복원
		return () => {
			document.body.style.overflow = '';
		};
	}, [isSidebarOpen]);

	return (
		<S.HeaderContainer>
			<S.Inner>
				<S.MenuImg src={MenuIcon} alt="menu" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
				<S.LogoImg src={Logo} alt="logo" onClick={() => navigate('/team5')} />
				<S.Text>홍길동님 환영합니다.</S.Text>
				<S.LoginBtn>
					<S.LoginImg src={Ghost} />
					프로필
				</S.LoginBtn>
			</S.Inner>

			{isSidebarOpen && (
				<>
					<S.Backdrop onClick={() => setIsSidebarOpen(false)} />
					<S.Sidebar>
						<S.SidebarMenu onClick={() => handleNavigate('/team5/admin/quizInput')}>
							<b style={{ color: 'red' }}>관리자 페이지</b>
							<span>▶</span>
						</S.SidebarMenu>
						<S.SidebarMenu onClick={() => handleNavigate('/team5/review ')}>리뷰 남기기<span>▶</span></S.SidebarMenu>
						<S.SidebarMenu onClick={() => handleNavigate('/team5/reviewToday')}>리뷰 모아보기<span>▶</span></S.SidebarMenu>
						<S.SidebarMenu onClick={() => handleNavigate('/team5/foodList')}>맛집<span>▶</span></S.SidebarMenu>
						<S.SidebarMenu onClick={() => handleNavigate('/team5/guessRate')}>골든벨 Quiz<span>▶</span></S.SidebarMenu>
						<S.SidebarMenu onClick={() => handleNavigate('/team5/guessRateResult')}>골든벨 Quiz 정답자<span>▶</span></S.SidebarMenu>
						<S.SidebarMenu onClick={() => handleNavigate('/team5/quiz')}>오늘의 Quiz<span>▶</span></S.SidebarMenu>
						<S.SidebarMenu onClick={() => handleNavigate('/team5/ranking')}>Ranking<span>▶</span></S.SidebarMenu>
					</S.Sidebar>
				</>
			)}
		</S.HeaderContainer>
	);
};

export default Header;
