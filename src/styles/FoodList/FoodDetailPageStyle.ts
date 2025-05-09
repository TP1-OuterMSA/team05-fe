import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  text-align: center;
  height: 100%;
  background-color: white;
  margin: 0 auto;
`;

export const DetailDiv = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const FoodImage = styled.img`
  display: flex;
  width: 100%;
  height: 220px;
  object-fit: cover;
  height: 30rem;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
  margin: 0 auto 0 0;
`;

export const FoodName = styled.div`
  display: flex;
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
`;

export const FoodType = styled.div`
  display: flex;
  font-size: 15px;
  color: #6c757d;
  font-weight: bold;
  margin: 25px auto 20px 30px;
`;

export const Text = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 20px;
`;

export const FoodDescription = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
`;

export const Link = styled.button`
  display: flex;
  padding: 0.75rem 1.5rem;
  background-color: #3a8ef6; 
  border-radius: 12px;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.2);
  cursor: pointer;
  a{
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }

  &:hover {
    background-color:rgb(49, 126, 220); 
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
