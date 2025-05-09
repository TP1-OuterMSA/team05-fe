import styled from "styled-components";

export const FoodContainer = styled.div`
  padding: 20px;
  background-color: white;
  min-height: calc(100vh - 80px);
  text-align: center;
`;

export const GhostImg = styled.img`
  width: 200px;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #1e1e1e;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #6c757d;
  margin-bottom: 40px;
`;

export const FoodList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const FoodItem = styled.div`
  width: 50%;
  background-color: #ffffff;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #1e1e1e;
  cursor: pointer;
  transition: box-shadow 0.8s;
  &:hover {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const Type = styled.div`
  font-size: 14px;
  color: #6c757d;
`;

export const ArrowImg = styled.img`
  width: 20px;
`;