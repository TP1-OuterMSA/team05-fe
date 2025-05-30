import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
`;

export const TabBox = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;
export const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const ActiveTab = styled.button`
  background-color: black;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
`;

export const InactiveTab = styled.button`
  background-color: #eaeaea;
  color: #888;
  padding: 8px 16px;
  border-radius: 8px;
`;

export const FilterBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const ReviewSummary = styled.div`
   background-color: #f9fafc;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0,0,0,0.05);
  margin-bottom: 30px;
`;

export const Participant = styled.div`
  font-size: 16px;
  color: #4caf50;
  font-weight: bold;
`;

export const AverageBox = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ReviewListTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 12px;
  color: black;
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ReviewItem = styled.div`
  padding: 14px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.05);
`;

export const ReviewMeta = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 6px;
`;

export const ReviewText = styled.div`
  font-size: 14px;
  line-height: 1.6;
`;
