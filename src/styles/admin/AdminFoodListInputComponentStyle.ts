import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12); 
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: flex-start;
  max-width: 100%;
  row-gap: 60px; 
`;

export const AddCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 30px;
  width: 340px;
  height: 370px;
  cursor: pointer;
  color: #666;
  margin-top: 45px;

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3182f6;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  float: right;
`;
