import styled from 'styled-components';
import { isMobile } from "../../hooks/Media";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  width: 1000px;
  height: 500px;
  background: #fff;
  border: 3px solid var(--Black);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  ${isMobile} {
    width: 300px;
    height: 200px;
    padding: 20px;
  }
`;

export const Message = styled.p`
  font: var(--SectionTitle);
  margin-bottom: 60px;
  transition: all 0.2s;
  ${isMobile} {
    font: var(--Button); 
    margin-bottom: 24px;
    text-align: center;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 236px;
  transition: all 0.2s;
  ${isMobile} {
    gap: 31px;
    flex-wrap: wrap;
  }
`;
