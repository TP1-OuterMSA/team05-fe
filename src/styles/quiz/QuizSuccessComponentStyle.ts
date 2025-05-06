import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  padding: 20px;
  margin: 0;
`;

export const Text = styled.div`
    font-weight: bold;
    margin: 50px 0;
    font-size: 20px;
    color:rgb(177, 189, 211);
`;

export const GhostImg = styled.img`
    width: 330px;
`;

export const ConfirmButton = styled.button`
  margin-top: 20px;
  padding: 10px 100px;
  background: #3a8ef6;
  color: white;
  margin-bottom: 50px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;