import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../styles/Home/WantedMenuComponentStyle";
import SubmitModal from "../components/modal/SubmitModal";


const menuList = ["김치우동밥", "된장찌개", "새우튀김", "치즈 핫도그", "감자 볶음", "카레 라이스"];

const WantedMenu = () => {
	const navigate = useNavigate();
	const [selectedMenus, setSelectedMenus] = useState<string[]>([]);
	const [customMenu, setCustomMenu] = useState<string>("");
	const [noneSelected, setNoneSelected] = useState<boolean>(false);
	const [showModal, setShowModal] = useState(false);




	const handleSelect = (menu: string) => {
		if (selectedMenus.includes(menu)) {
			setSelectedMenus(selectedMenus.filter((m) => m !== menu));
		} else {
			setSelectedMenus([...selectedMenus, menu]);
		}
	};

	const handleSubmit = () => {
		if (!noneSelected && selectedMenus.length === 0 && customMenu.trim() === "") {
			alert("메뉴를 선택하거나 추가 의견을 입력해주세요.");
			return;
		}

		console.log("선택한 메뉴:", noneSelected ? "선택하지 않음" : selectedMenus);
		console.log("추가 의견:", customMenu);
		setShowModal(true);
		// 제출 API 로직
	};
	const handleConfirm = () => {
		setShowModal(false);          // 모달 닫기
		navigate("/team5/evaluation"); // 페이지 이동
	};


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
