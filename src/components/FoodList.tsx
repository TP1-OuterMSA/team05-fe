import styled from "styled-components";

const FoodContainer = styled.div`
  padding: 20px;
`;

const FoodItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
`;

const FoodList = () => {
  return (
    <FoodContainer>
      <h1>학교 근처 맛집</h1>
      <FoodItem>맛집 1</FoodItem>
      <FoodItem>맛집 2</FoodItem>
      <FoodItem>맛집 3</FoodItem>
      <FoodItem>맛집 4</FoodItem>
    </FoodContainer>
  );
};

export default FoodList;
