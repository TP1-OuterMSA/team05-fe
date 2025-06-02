// src/styles/quiz/GuessRateStyle.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: white;
  height: 100vh;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 30px 0;
  font-size: 28px;
  color: rgb(177, 189, 211);
`;

export const Ghost = styled.img`
  width: 200px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const QuestionBox = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

export const Question = styled.h3`
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

export const SubText = styled.p`
  font-size: 18px;
  color: #888;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 3rem;
`;
export const StarBox = styled.div`
  display: flex;
  justify-content: flex-start;  
  width: 100%;
  max-width: 400px;
  margin-top: 10px;

  svg {
    font-size: 40px; 
  }
`;


export const ScoreInput = styled.input`
  width: 80px;
  height: 50px;
  font-size: 24px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 12px;
`;


export const SelectedText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #444;
`;

export const ConfirmButton = styled.button`
  padding: 16px 32px;
  background-color: #2470ff;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #125de7;
  }
`;
