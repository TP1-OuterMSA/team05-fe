// FoodListCard.tsx
import { useRef, useState } from "react";
import * as S from "../styles/admin/FoodListCardComponentStyle";
import AdminDeleteFoodList from "./modal/AdminDeleteFoodList";
import { deleteStore } from "../api/adminFoodList";

interface FoodCardProps {
	index: number;
	data: {
		id?: number | null;
		type: string;
		name: string;
		image: File | null;
		description: string;
		link: string;
	};
	onUpdate: (card: FoodCardProps["data"]) => void;
	onDelete: () => void;
}

export const FoodListCard: React.FC<FoodCardProps> = ({ index, data, onUpdate, onDelete }) => {
	const imageInputRef = useRef<HTMLInputElement>(null);
	const [showModal, setShowModal] = useState(false);

	const handleChange = (key: keyof FoodCardProps["data"], value: any) => {
		onUpdate({ ...data, [key]: value });
	};
	const handleTypeChange = (key: keyof FoodCardProps["data"], value: string) => {
		if (key === "type") {
			const typeMap: Record<string, string> = {
				"음식점": "RESTAURANT",
				"카페": "CAFE",
				"술집": "BAR",
				"기타": "ETC",
			};
			onUpdate({ ...data, [key]: typeMap[value] || "" });
		} else {
			onUpdate({ ...data, [key]: value });
		}
	};


	return (
		<div>
			<S.Header>
				맛집{index + 1}
				<div>
					<S.DeleteButton onClick={() => setShowModal(true)}>삭제하기</S.DeleteButton>
					{/* <S.EditButton>수정하기</S.EditButton> */}
				</div>
			</S.Header>

			<S.CardContainer>
				<S.Label>식당 종류를 선택해주세요.</S.Label>
				<S.Select
					onChange={(e) => handleTypeChange("type", e.target.value)}
					value={
						{
							"RESTAURANT": "음식점",
							"CAFE": "카페",
							"BAR": "술집",
							"ETC": "기타",
						}[data.type] || ""
					}
				>
					<option value="">선택</option>
					<option value="음식점">음식점</option>
					<option value="카페">카페</option>
					<option value="술집">술집</option>
					<option value="기타">기타</option>
				</S.Select>


				<S.LabelL>식당 이름을 입력해주세요.</S.LabelL>
				<S.Input
					type="text"
					placeholder="식당이름을 입력하세요"
					value={data.name}
					onChange={(e) => handleChange("name", e.target.value)}
				/>

				<S.LabelL>식당 사진을 올려주세요.</S.LabelL>
				<S.FileInput
					type="file"
					ref={imageInputRef}
					onChange={(e) => {
						const file = e.target.files?.[0] ?? null;
						handleChange("image", file);
					}}
				/>


				<S.LabelL>식당 정보를 입력해주세요.</S.LabelL>
				<S.Input
					placeholder="식당 정보를 입력하세요"
					value={data.description}
					onChange={(e) => handleChange("description", e.target.value)}
				/>

				<S.LabelL>식당 링크를 입력해주세요.</S.LabelL>
				<S.Input
					type="text"
					placeholder="식당 링크를 입력하세요"
					value={data.link}
					onChange={(e) => handleChange("link", e.target.value)}
				/>
			</S.CardContainer>
			{showModal && (
				<AdminDeleteFoodList
					onCancel={() => setShowModal(false)}
					onConfirm={() => {
						if (data.id !== null) {
							deleteStore(data.id).catch((err) =>
								console.error("삭제 중 오류 발생:", err)
							);
						}
						onDelete();
						setShowModal(false);
					}}
				/>
			)}
		</div>
	);
};