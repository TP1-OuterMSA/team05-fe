import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
  h3{
    margin: 5px;
  }
`;

export const Text = styled.div`
    font-weight: bold;
    margin: 50px 0;
    font-size: 20px;
    color:rgb(177, 189, 211);
`;

export const GhostImg = styled.img`
    width: 300px;
`;

export const ConfirmButton = styled.button`
  margin-top: 20px;
  padding: 10px 100px;
  background: #3a8ef6;
  margin-bottom: 50px;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;