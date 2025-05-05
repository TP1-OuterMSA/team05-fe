import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  height: 100vh;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #3a4a5a;
  margin-top: 50px;
  margin-bottom: 40px;
`;

export const PodiumContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Top3UserProfile = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Medal = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const InfoText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #444;
`;

export const ScoreText = styled.div`
  font-size: 16px;
  color: #777;
`;


export const FilterAndSearchWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;


export const FilterTabs = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;

  span {
    color:#3a4a5a;
    cursor: pointer;
    padding: 5px 10px;
  }

  .active {
    color: #3366ff;
    font-weight: bold;
   
  }

  span:not(:last-child)::after {
    content: '|';
    color: #ccc;
    margin-left: 10px;
  }
`;


export const SearchContainer = styled.div<{ icon: string }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  input {
    width: 280px;
    padding: 10px 45px 10px 20px;
    border: none;
    border-radius: 50px;
    font-size: 15px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: right 15px center;

    &::placeholder {
      color: #aaa;
    }

    &:focus {
      outline: none;
      border: 1px solid #3a8ef6;
    }
  }
`;

export const RankingContainer = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: white;
  border-radius: 20px;
  padding: 30px 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const MyRanking = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;

  span {
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
`;

export const TableHeader = styled.thead``;

export const TableRow = styled.tr`
  height: 48px;
`;

export const TableHeaderItem = styled.th`
  font-size: 16px;
  font-weight: bold;
  color: #777;
`;

export const TableBody = styled.tbody``;

export const TableCell = styled.td`
  font-size: 15px;
  color: #222;
  padding: 10px 0;
  text-align: center;
`;
