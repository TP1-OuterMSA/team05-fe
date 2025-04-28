import * as S from "../styles/FoodList/FoodListPageStyle";
import { useNavigate } from "react-router-dom";
import { foodListDummy } from "../api/foodListDummy";
import GhostIcon from "../assets/images/team5/quiz_icon.png";
import Arrow from "../assets/images/team5/Arrow.png";


const FoodListPage = () => {
  const navigate = useNavigate();

  return (
    <S.FoodContainer>
      <S.GhostImg src={GhostIcon} />
      <S.Title>학교 근처 맛집</S.Title>
      <S.SubTitle>{foodListDummy.length}개</S.SubTitle>
      <S.FoodList>
        {foodListDummy.map((food: any) => (
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
