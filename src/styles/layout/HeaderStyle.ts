import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
 box-shadow: 0 1px 10px rgb(0, 0, 0, 0.1);
  z-index: 10;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 40px;
`;

export const MenuImg = styled.img`
  width: 40px;
  height: 40px; 
`

export const LogoImg = styled.img`
  margin-left: 10px;
  height: 40px; 
  margin-right: auto;
`

export const QuizBtn = styled.button`
  display: flex;
  margin-right: 20px;
  background-color: #3a8ef6;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  color: white;
  line-height: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;


export const Text = styled.p`
  color: #6D717D;
  font-weight: bold;
  font-size: 15px;
`

export const LoginBtn = styled.button`
  display: flex;
  margin-left: 20px;
  background-color: black;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`


export const LoginImg = styled.img`
  height: 20px;
  margin-right: 10px;
`