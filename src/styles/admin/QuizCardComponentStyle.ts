import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const QuizText = styled.p`
  font-weight: bold;
  font-size: 20px;
`

export const QuizInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #8094B3;
  border-radius: 6px;
  width: 27%;
  min-width: 330px;
  padding: 20px;
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
`

export const QuestionInput = styled.input<{$canedit:boolean}>`
  border-radius: 6px;
  border: 1px solid #E2E2E4;
  padding: 8px 10px;
  outline: none;
  color: ${({ $canedit }) => ($canedit ? "black" : "#6D717D")};

  &::placeholder{
    color: #6D717D;
  }
`;

export const OptionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionPersonalDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const OptionPersonalText = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin: 0 10px 0 0;
  min-width: 30px;
`;

export const OptionPersonalInput = styled.input<{$canedit:boolean}>`
  border-radius: 6px;
  border: 1px solid #E2E2E4;
  outline: none;
  padding: 8px 10px;
  width: 100%;
  
  color: ${({ $canedit }) => ($canedit ? "black" : "#6D717D")};
  &::placeholder{
    color: #6D717D;
  }
`;

export const OptionPersonalImg = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;