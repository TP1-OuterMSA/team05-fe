import { useParams } from "react-router-dom";
import GhostImg from "../assets/images/team5/quiz_icon.png";
import * as S from "../styles/FoodList/FoodDetailPageStyle";
import { useEffect, useState } from "react";
import { getStore } from "../api/adminFoodList";

interface FoodCard {
	id?: number|null;
	type: string;
	name: string;
	image: string;
	description: string;
	link: string;
}

const FoodDetailPage = () => {
  const { id } = useParams();
  const [listData, setListData] = useState<FoodCard>();
  // const food = foodListDummy.find((item: any) => item.id === Number(id));

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStore();
        const item = response.result.stores.find((item: any) => item.id === Number(id));
        console.log(item);

        const loadedCard: FoodCard = {
          type: item.storeType,
          name: item.name,
          image: item.image,
          description: item.description,
          link: item.url,
          id: item.id,
        };

        console.log("불러온 음식점 데이터:", loadedCard);
        setListData(loadedCard);
      } catch (error) {
        console.error("맛집 데이터를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchData();
  }, []);
  
  if (!listData) {
    return <div>존재하지 않는 음식점입니다.</div>;
  }



  return (
    <S.DetailContainer>
      <S.DetailDiv>
        <S.FoodImage src={listData.image} alt={listData.name} />
        <div style={{display:"flex", flexDirection:"row"}}>
          <S.FoodName><img src={GhostImg} style={{width:"40px", marginRight: "10px"}}/>{listData.name}</S.FoodName>
          <S.FoodType>{listData.type}</S.FoodType>
        </div>
        <S.Text>정보</S.Text>
        <S.FoodDescription>{listData.description}</S.FoodDescription>
        <S.Text>링크</S.Text>
        <S.Link><a href={listData.link}>{listData.name} 바로가기</a></S.Link>
      </S.DetailDiv>
    </S.DetailContainer>
  );
};

export default FoodDetailPage;
