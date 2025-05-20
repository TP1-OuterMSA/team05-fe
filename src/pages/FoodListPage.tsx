import * as S from "../styles/FoodList/FoodListPageStyle";
import { useNavigate } from "react-router-dom";
import GhostIcon from "../assets/images/team5/quiz_icon.png";
import Arrow from "../assets/images/team5/Arrow.png";
import { useEffect, useState } from "react";
import { getStore } from "../api/adminFoodList";

interface FoodCard {
	id?: number|null;
	type: string;
	name: string;
	image: File | null;
	description: string;
	link: string;
}

const FoodListPage = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState<FoodCard[]>();

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getStore();
          const data = response.result.stores;
          const loadedCards = data.map((item: any) => ({
            type: item.storeType,
            name: item.name,
            image: item.image, 
            description: item.description,
            link: item.url,
            id: item.id, 
          }));
          setListData(loadedCards);
        } catch (error) {
          console.error("맛집 데이터를 불러오는 데 실패했습니다.", error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <S.FoodContainer>
      <S.GhostImg src={GhostIcon} />
      <S.Title>학교 근처 맛집</S.Title>
      <S.SubTitle>{listData?.length}개</S.SubTitle>
      <S.FoodList>
        {listData?.map((food: any) => (
          <S.FoodItem key={food.id} onClick={() => navigate(`/team5/foodList/${food.id}`)}>
            <S.LeftText>
              <S.Name>{food.name}</S.Name>
              <S.Type>{food.type}</S.Type>
            </S.LeftText>
            <S.ArrowImg src={Arrow} />
          </S.FoodItem>
        ))}
      </S.FoodList>
    </S.FoodContainer>
  );
};

export default FoodListPage;
