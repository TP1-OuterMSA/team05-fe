import { useState } from "react";
import * as S from "../styles/admin/AdminWantedMenuComponentStyle";
import PlusCircle from "../assets/images/team5/PlusCircle.png";
import MinusCircle from "../assets/images/team5/MinusCircle.png";
import PlusCircleG from "../assets/images/team5/PlusCircleG.png";
import Ghost from "../assets/images/team5/ghost_btn_icon.png";

export const AdminWantedMenu = () => {
	const [inputValue, setInputValue] = useState("");
	const [menuList, setMenuList] = useState<string[]>([
		"김치볶음밥",
		"된장찌개",
		"새우튀김",
		"치즈 핫도그",
		"감자 볶음",
		"카레 라이스",
	]);
	const [isEditing, setIsEditing] = useState(false);

	const handleAddMenu = () => {
		const trimmed = inputValue.trim();


		if (menuList.length >= 8) {
			alert("메뉴는 8개까지만 입력이 가능합니다.");
			return;
		}


		if (trimmed && !menuList.includes(trimmed)) {
			setMenuList([...menuList, trimmed]);
			setInputValue("");
		}
	};


	const handleDeleteMenu = (menuToDelete: string) => {
		setMenuList(menuList.filter((menu) => menu !== menuToDelete));
	};

	const handleSubmit = () => {
		alert("메뉴가 반영되었습니다.");
	};

	return (
		<>
			<S.Container>
				<S.Title>
					<img src={Ghost} alt="고스트 아이콘" width={20} height={20} style={{ marginRight: "8px" }} />
					먹고 싶은 메뉴 페이지에 들어갈 메뉴를 입력해주세요!
				</S.Title>

				<S.Subtitle>메뉴를 입력해주세요.</S.Subtitle>

				<S.InputRow>
					<S.Input
						placeholder="메뉴 입력 후 추가 버튼을 눌러주세요."
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<S.AddButton onClick={handleAddMenu}>
						<img
							src={inputValue.trim() === "" ? PlusCircleG : PlusCircle}
							alt="추가"
							width={44}
							height={44}
						/>
					</S.AddButton>
				</S.InputRow>

				<S.MenuList>
					{menuList.map((menu, i) => (
						<S.MenuItem key={i}>
							{menu}
							{isEditing && (
								<S.DeleteIcon
									src={MinusCircle}
									alt="삭제"
									onClick={() => handleDeleteMenu(menu)}
								/>
							)}
						</S.MenuItem>
					))}
				</S.MenuList>
			</S.Container>

			<S.ButtonRow>
				<S.ActionButton variant="edit" onClick={() => setIsEditing(!isEditing)}>
					{isEditing ? "수정 완료" : "수정하기"}
				</S.ActionButton>
				<S.ActionButton variant="submit" onClick={handleSubmit}>
					반영하기
				</S.ActionButton>
			</S.ButtonRow>
		</>
	);
};
