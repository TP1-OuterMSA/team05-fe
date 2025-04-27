import { useParams } from "react-router-dom";
import { foodListDummy } from "../api/foodListDummy";
import * as S from "../styles/FoodList/FoodDetailPageStyle";

const FoodDetailPage = () => {
  const { id } = useParams();
  const food = foodListDummy.find((item: any) => item.id === Number(id));

  if (!food) {
    return <div>존재하지 않는 음식점입니다.</div>;
  }

  return (
    <S.DetailContainer>
      <S.FoodImage src={food.image} alt={food.name} />
      <S.FoodName>{food.name}</S.FoodName>
      <S.FoodType>{food.type}</S.FoodType>
      <S.FoodDescription>{food.description}</S.FoodDescription>
    </S.DetailContainer>
  );
};

export default FoodDetailPage;
