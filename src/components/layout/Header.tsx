import * as S from '../../styles/layout/HeaderStyle';
import Logo from '../../assets/images/Logo.svg';
import Menu from "../../assets/images/Menu.png";
import LoginIcon from "../../assets/images/LoginIcon.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	return (
		<S.HeaderContainer>
			<S.Inner>
				<S.MenuImg src={Menu}/>
				<S.LogoImg src={Logo} alt="logo" onClick={()=>navigate('/')}/>
				<S.Text>홍길동님 환영합니다</S.Text>
				<S.LoginBtn>
					<S.LoginImg src={LoginIcon}/>
					프로필
				</S.LoginBtn>
			</S.Inner>
		</S.HeaderContainer>
	);
};

export default Header;
