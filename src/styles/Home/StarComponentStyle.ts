import styled from 'styled-components';
import { isMobile } from "../../hooks/Media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
`;

export const StarsWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const StarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color:#ffca28;
  transition: transform 0.3s ease;
  padding: 0;
  margin-left: 2px;
//   ${isMobile} {
//   font-size: 35px;
// }

  &:hover {
    transform: scale(1.1);
    color: #ffca28;
  }

  svg {
    pointer-events: none;
    transition: color 0.2s;
  }
  
`;

