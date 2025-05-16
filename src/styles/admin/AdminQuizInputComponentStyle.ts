import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12); // 더 진한 그림자
  /* border-radius: 12px; */
  display: flex;
  flex-direction: column;
  min-height: 280px; // 더 직사각형 느낌을 위해 높이 확보
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

export const QuizDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 12px;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 44px;
  padding: 0 12px;
  font-size: 16px;
  border: 2px solid #e2e2e4;
  border-radius: 6px;
  font-weight: bold;
  color: black;
  transition: border 0.2s;

  &::placeholder {
    color: #a1a1aa;
  }

  &:focus {
    outline: none;
    border: 2px solid #3182f6;
  }
`;

export const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.85;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 25px;
  margin-bottom: 180px;
`;

export const MenuItem = styled.div`
  width: fit-content;
  max-width: 180px;
  height: 40px;
  border-radius: 5px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1.5px solid #8094b3;
  background-color: transparent;
  color: #8094b3;
  font-size: 16px;
  font-weight: bold;
  gap: 8px;
`;

export const DeleteIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;
`;

export const ActionButton = styled.button<{ variant: "edit" | "submit" }>`
  font-size: 14px;
  font-weight: bold;
  padding: 8px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  background-color: ${({ variant }) =>
		variant === "edit" ? "#000000" : "#3182f6"};
  color: white;
`;
