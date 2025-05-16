// AdminFoodList.tsx
import { useState, useEffect } from "react";
import { FoodListCard } from "./FoodListCard";
import * as S from "../styles/admin/AdminFoodListInputComponentStyle";
import PlusIcon from "../assets/images/team5/PlusCircleBig.png";
import GhostIcon from "../assets/images/team5/ghost_btn_icon.png";

interface FoodCard {
	type: string;
	name: string;
	image: File | null;
	description: string;
	link: string;
}

export const AdminFoodList = () => {
	const [cards, setCards] = useState<FoodCard[]>([...Array(4)].map(() => ({
		type: "",
		name: "",
		image: null,
		description: "",
		link: ""
	})));

	const handleUpdateCard = (index: number, updatedCard: FoodCard) => {
		const newCards = [...cards];
		newCards[index] = updatedCard;
		setCards(newCards);
	};

	const handleAddCard = () => {
		setCards([...cards, { type: "", name: "", image: null, description: "", link: "" }]);
	};
	const handleDeleteCard = (index: number) => {
		setCards(cards.filter((_, i) => i !== index));
	};

	return (
		<>
			<S.Container>
				<S.Title>
					<img src={GhostIcon} alt="고스트" width={20} height={20} style={{ marginRight: "8px" }} />
					맛집 카드를 채워주세요!
				</S.Title>
				<S.CardWrap>
					{cards.map((card, index) => (
						<FoodListCard
							key={index}
							index={index}
							data={card}
							onUpdate={(updated) => handleUpdateCard(index, updated)}
							onDelete={() => handleDeleteCard(index)}
						/>
					))}
					{(
						<S.AddCard onClick={handleAddCard}>
							<img src={PlusIcon} alt="추가" />
							<p>맛집 추가하기</p>
						</S.AddCard>
					)}
				</S.CardWrap>
			</S.Container>

			<S.SubmitButton onClick={() => {
				const isAllFilled = cards.every((card) =>
					card.type.trim() !== "" &&
					card.name.trim() !== "" &&
					card.description.trim() !== "" &&
					card.link.trim() !== "" &&
					card.image !== null
				);

				if (!isAllFilled) {
					alert("모든 칸의 정보를 입력하세요.");
					return;
				}

				alert("반영되었습니다!");
			}}>
				반영하기
			</S.SubmitButton>


		</>
	);
};
