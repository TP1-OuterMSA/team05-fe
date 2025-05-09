import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: white;
  height: 100vh;
`;

export const Text = styled.div`
    font-weight: bold;
    margin: 20px 0;
    font-size: 20px;
    color:rgb(177, 189, 211);
`;

export const QuizNumDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export const QuizNum = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-right: 10px;
`;

export const QuizBox = styled.div`
  background: white;
  padding: 30px;
  width: 90%;
  text-align: center;
`;

export const Question = styled.h2`
  font-size: 25px;
  font-weight: 700;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  flex-flow: wrap;
`;

export const Option = styled.button`
  background: #ffffff;
  border: 2px solid #3a8ef6;
  border-radius: 15px;
  margin: 10px 15px;
  padding: 15px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #3a8ef6;
    color: white;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

export const SchoolRestaurantBtn = styled.button`
  display: flex;
  background: white;
  color: black;
  border: none;
  border-radius: 12px;
  padding: 10px 30px;
  font-size: 17px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  transition: background 0.2s;
  &:hover {
    background:rgb(96, 113, 138);
    color: white;
  }
  div{
    margin: auto 0;
  }
  p{
    height: 15px;
  }
  img{
    margin: auto 20px auto 0;
  }
`;

export const VoteBtn = styled.button`
  display: flex;
  flex-direction: column;
  background: white;
  color: black;
  border: none;
  border-radius: 12px;
  padding: 10px 30px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  transition: background 0.2s;
  &:hover {
    background:rgb(96, 113, 138);
    color: white;
  }
  p{
    margin: 0;
  }
  img{
    margin:5px  auto;
  }
`;

export const BtnImg = styled.img`
  width: 50px;
`;