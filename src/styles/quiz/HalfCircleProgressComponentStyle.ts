import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 20px;
  width: 250px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProgressSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`;

export const GhostImage = styled.img`
  position: absolute;
  top: 60px;
  bottom: 0;
  width: 180px;
  height: auto;
`;
