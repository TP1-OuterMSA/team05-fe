import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 600px;
  height: 260px;
  background-color: white;
  border-radius: 6px;
  padding: 30px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Message = styled.p`
  color: black;
  font-size: 26px;
  font-weight: bold;
  margin-top: 70px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const CancelButton = styled.button`
  background-color: #7b8aa0;
  color: white;
  width: 120px;
  height: 44px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #6b7c93;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #ff3b30;
  color: white;
  width: 120px;
  height: 44px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e3342f;
  }
`;
