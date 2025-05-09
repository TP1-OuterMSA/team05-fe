import { useParams } from "react-router-dom";
import { foodListDummy } from "../api/foodListDummy";
import GhostImg from "../assets/images/team5/quiz_icon.png";
import * as S from "../styles/FoodList/FoodDetailPageStyle";

const FoodDetailPage = () => {
  const { id } = useParams();
  const food = foodListDummy.find((item: any) => item.id === Number(id));

  if (!food) {
    return <div>존재하지 않는 음식점입니다.</div>;
  }

  return (
    <S.DetailContainer>
      <S.DetailDiv>
        <S.FoodImage src={food.image} alt={food.name} />
        <div style={{display:"flex", flexDirection:"row"}}>
          <S.FoodName><img src={GhostImg} style={{width:"40px", marginRight: "10px"}}/>{food.name}</S.FoodName>
          <S.FoodType>{food.type}</S.FoodType>
        </div>
        <S.Text>정보</S.Text>
        <S.FoodDescription>{food.description}</S.FoodDescription>
        <S.Text>링크</S.Text>
        <S.Link><a href={food.url}>{food.name} 바로가기</a></S.Link>
      </S.DetailDiv>
    </S.DetailContainer>
  );
};

export default FoodDetailPage;
