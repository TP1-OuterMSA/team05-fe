import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 320px;
  background-color: white;
  border-radius: 6px;
  padding: 30px 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: center;
`;

export const Message = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-bottom: 30px;
`;

export const ConfirmButton = styled.button`
  background-color: #8094B3;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  color: black;
  cursor: pointer;
`;
