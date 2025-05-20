// FoodListCardComponentStyle.ts
import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #8094B3;
  border-radius: 6px;
  padding: 20px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 6px;
`;

export const EditButton = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const Select = styled.select`
 margin: 0;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #E2E2E4;
  width: fit-content;    
  font-weight: bold;
`;


export const Input = styled.input`
 margin: 0px;
  padding: 7px;
  border-radius: 6px;
  border: 1px solid #E2E2E4;
  &::placeholder {
    color: #6D717D;
  }
`;
export const Label = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const LabelL = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 0px;
`;


export const FileInput = styled.input`
 margin: 0;
  padding: 0px;
`;


