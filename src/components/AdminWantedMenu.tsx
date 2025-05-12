import { useState, useEffect } from "react";
import * as S from "../styles/admin/AdminWantedMenuComponentStyle";
import PlusCircle from "../assets/images/team5/PlusCircle.png";
import MinusCircle from "../assets/images/team5/MinusCircle.png";
import PlusCircleG from "../assets/images/team5/PlusCircleG.png";
import Ghost from "../assets/images/team5/ghost_btn_icon.png";
import { getWantMenu, putWantMenu } from "../api/adminWantMenu";

export const AdminWantedMenu = () => {
	const [inputValue, setInputValue] = useState("");
	const [menuList, setMenuList] = useState<string[]>([]);
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		const fetchMenus = async () => {
			try {
				const data = await getWantMenu();
				if (Array.isArray(data)) {
					setMenuList(data); // 정상 응답이니까 그냥 사용
				} else {
					console.warn("서버 응답 형식이 예상과 다릅니다.", data);
					setMenuList([]);
				}
			} catch (error) {
				console.error("서버 오류 발생:", error);
				// 진짜 실패했을 때만 alert
				alert("아직 입력된 메뉴가 없습니다.");
			}
		};

		fetchMenus();
	}, []);

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

	// 메뉴 저장 API 호출
	const handleSubmit = async () => {
		try {
			await putWantMenu(menuList);
			alert("메뉴가 반영되었습니다.");
		} catch (error) {
			alert("저장 중 오류가 발생했습니다.");
		}
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
