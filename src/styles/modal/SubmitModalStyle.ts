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
  width: 600px;
  height: 260px;
  background-color: white;
  border-radius: 6px;
  padding: 30px 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 306px;
    height: 160px;
  }
`;

export const Message = styled.p`
 font : var(--SectionTitle);
  color: black;
  margin-top: 80px;
  margin-bottom: 30px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin-top: 50px;
    font-size: 20px;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #8094B3;
  width: 255px;
  height: 44px;
  color: white;
  font: var(--MenuTitle);
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  margin-bottom: 60px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 200px;
    height: 40px;
    font-size: 14px;

  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  font-size: 25px;
  color: black;
  cursor: pointer;
`;
