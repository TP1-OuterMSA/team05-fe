// AdminFoodList.tsx
import { useState, useEffect } from "react";
import { FoodListCard } from "./FoodListCard";
import * as S from "../styles/admin/AdminFoodListInputComponentStyle";
import PlusIcon from "../assets/images/team5/PlusCircleBig.png";
import GhostIcon from "../assets/images/team5/ghost_btn_icon.png";
import { getStore, postStore } from "../api/adminFoodList";

interface FoodCard {
	id?: number|null;
	type: string;
	name: string;
	image: File | null;
	description: string;
	link: string;
}

export const AdminFoodList = () => {
	const [cards, setCards] = useState<FoodCard[]>([...Array(4)].map(() => ({
		id: null,
		type: "",
		name: "",
		image: null,
		description: "",
		link: ""
	})));
	const urlToFile = async (url: string) => {
		console.log(url);
		const response = await fetch(url);
		console.log("dfdf");
		const data = await response.blob();
		console.log("cccc");
		const ext = url.split(".").pop(); // url 구조에 맞게 수정할 것
		const filename = url.split("/").pop(); // url 구조에 맞게 수정할 것
		const metadata = { type: `image/${ext === "svg" ? "svg+xml" : ext}` };
		return new File([data], filename!, metadata);
	};

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

	useEffect(() => {
	const fetchData = async () => {
		try {
			const response = await getStore();
			const data = response.result.stores;

			const loadedCards = await Promise.all(
				data.map(async (item: any) => ({
					type: item.storeType,
					name: item.name,
					image: await urlToFile(item.image), // ✅ 올바른 await 사용
					description: item.description,
					link: item.url,
					id: item.id,
				}))
			);

			setCards(loadedCards);
		} catch (error) {
			console.error("맛집 데이터를 불러오는 데 실패했습니다.", error);
		}
	};

	fetchData();
}, []);



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

			<S.SubmitButton onClick={async () => {
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

				try {
					for (const card of cards) {
						await postStore(
							card.id ?? 0,
							card.type,
							card.name,
							card.description,
							card.link,
							card.image as File
						);
					}

					alert("반영되었습니다!");
				} catch (error) {
					console.error("맛집 반영 중 오류 발생:", error);
					alert("반영 중 오류가 발생했습니다.");
				}
			}}>
				반영하기
			</S.SubmitButton>
		</>
	);
};
