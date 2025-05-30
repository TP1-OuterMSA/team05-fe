import { useLocation, useNavigate } from "react-router-dom";
import * as S from "../../styles/layout/AdminLayoutStyle";
import { Outlet } from "react-router-dom";


const AdminLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const pathname = location.pathname;

	return (
		<S.Container>
			<S.Sidebar>
				<S.MenuButton
					$active={pathname === "/team5/admin/quizInput"}
					onClick={() => navigate("/team5/admin/quizInput")}
				>
					퀴즈 내용 입력
				</S.MenuButton>
				<S.MenuButton
					$active={pathname === "/team5/admin/wantMenu"}
					onClick={() => navigate("/team5/admin/wantMenu")}
				>
					먹고 싶은 메뉴 입력
				</S.MenuButton>
				<S.MenuButton
					$active={pathname === "/team5/admin/foodListInput"}
					onClick={() => navigate("/team5/admin/foodListInput")}
				>
					맛집 입력
				</S.MenuButton>
			</S.Sidebar>

			<S.Content>
				<Outlet />
			</S.Content>
		</S.Container>
	);
};

export default AdminLayout;
