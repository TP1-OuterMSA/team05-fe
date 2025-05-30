import styled from "styled-components";

export const ViewReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EFF2F8;
  padding: 30px;
`;

export const BtnDiv = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 20px;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;

  background-color: ${({ $active }) => ($active ? "black" : "transparent")};
  color: ${({ $active }) => ($active ? "#F9FAFC" : "#6D717D")};

  transition: 0.2s;

  &:hover {
    background-color: ${({ $active }) => ($active ? "black" : "#e5e5e5")};
  }
`;

export const ReviewBtn = styled(TabButton)``;
export const WantMenuBtn = styled(TabButton)``;
