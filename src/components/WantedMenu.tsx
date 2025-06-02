import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../styles/Home/WantedMenuComponentStyle";
import SubmitModal from "../components/modal/SubmitModal";
import { getWantMenu, postWantMenu } from "../api/wantMenu";


const WantedMenu = () => {
	const navigate = useNavigate();
	const [selectedMenus, setSelectedMenus] = useState<string[]>([]);
	const [customMenu, setCustomMenu] = useState<string>();
	const [noneSelected, setNoneSelected] = useState<boolean>(false);
	const [showModal, setShowModal] = useState(false);
	const [menuList, setMenuList] = useState<string[]>([]);


	const handleSelect = (menu: string) => {
		if (selectedMenus.includes(menu)) {
			setSelectedMenus(selectedMenus.filter((m) => m !== menu));
		} else {
			setSelectedMenus([...selectedMenus, menu]);
		}
	};

	const handleSubmit = () => {//noneselectedmenu가 선택되어있고 trim이 0이거나 배열의 길이가 0이면서 trim이 0이면
		if ((noneSelected && (customMenu?.trim() === "" || customMenu === undefined)) || (selectedMenus.length === 0 && (customMenu?.trim() === "" || customMenu === undefined))) {
			alert("메뉴를 선택하거나 추가 의견을 입력해주세요.");
			return;
		}
		const fetchWantMenu = async () => {
			try {
				await postWantMenu(selectedMenus ? selectedMenus : undefined, customMenu ? customMenu : undefined);
				console.log('db 전송 성공');
			} catch (error) {
				throw error;
			}
		}
		fetchWantMenu();
		// console.log("선택한 메뉴:", noneSelected ? "선택하지 않음" : selectedMenus);
		// console.log("추가 의견:", customMenu);
		setShowModal(true);
	};
	const handleConfirm = () => {
		setShowModal(false);
		navigate("/team5");
	};

	useEffect(() => {
		const fetchGetWantMenu = async () => {
			try {
				const data = await getWantMenu();
				console.log("불러온 메뉴 목록:", data); // ← 이 로그 찍히나요?
				setMenuList(data);
			} catch (error) {
				console.error("메뉴 목록 불러오기 실패:", error);
			}
		};
		fetchGetWantMenu();
	}, []);




	return (
		<>
			<S.ReviewDiv>
				<S.BigText>먹고 싶은 메뉴</S.BigText>

				<S.Text>
					먹고 싶은 메뉴를 선택해주세요.{" "}
					<S.CheckLabel>
						<input
							type="checkbox"
							checked={noneSelected}
							onChange={() => {
								setNoneSelected(!noneSelected);
								if (!noneSelected) setSelectedMenus([]);
							}}
						/>
						<span>선택하지 않음</span>
					</S.CheckLabel>
				</S.Text>

				<S.MenuList>
					{menuList.map((menu, index) => (
						<S.MenuItem
							key={index}
							onClick={() => !noneSelected && handleSelect(menu)}
							$selected={selectedMenus.includes(menu)}
							$disabled={noneSelected}
						>
							{menu}
						</S.MenuItem>
					))}
				</S.MenuList>

				<S.BigText>추가 의견</S.BigText>
				<S.WholeReviewInput
					placeholder="추가로 먹고 싶은 메뉴가 있다면 입력해주세요."
					value={customMenu}
					onChange={(e) => setCustomMenu(e.target.value)}
				/>
			</S.ReviewDiv>

			{/* ✅ 제출 버튼은 ReviewDiv 바깥쪽에 위치 */}
			<S.SubmitBtn onClick={handleSubmit}>제출하기</S.SubmitBtn>

			{showModal && (
				<SubmitModal
					onClose={() => setShowModal(false)}
					onConfirm={handleConfirm} // ✅ 여기!
				/>
			)}

		</>
	);

};

export default WantedMenu;
