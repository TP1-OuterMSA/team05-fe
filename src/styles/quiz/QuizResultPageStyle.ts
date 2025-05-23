import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f9ff;
  min-height: 100vh;
  padding: 30px 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   margin-top: 40px;
  margin-bottom: 40px;
`;

// export const Weather = styled.div`
//   font-size: 14px;
//   color: #888;
//   margin-bottom: 5px;
// `;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

export const CalendarSection = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 350px;
`;

export const ResultSection = styled.div`
  flex: 1;
  min-width: 320px;
  max-width: 500px;
  background: white;
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const SelectedDate = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #444;
  margin-bottom: 10px;
`;

export const Score = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #2d9cdb;
  margin-bottom: 10px;
`;

export const StarRow = styled.div`
  margin-bottom: 30px;

  svg {
    font-size: 28px;
    margin: 0 3px;
  }
`;

export const WinnerTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 30px 0 15px;
`;

export const SearchInput = styled.input`
  width: 70%;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 50px;
  border: 1px solid #ccc;
  outline: none;
  margin-bottom: 20px;

  &:focus {
    border-color: #3a8ef6;
  }
`;

export const WinnerBox = styled.div`
  background-color: #f0f4ff;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 500;
  color: #333;
`;

export const NoWinner = styled.div`
  font-size: 16px;
  color: #999;
  margin-top: 10px;
`;
