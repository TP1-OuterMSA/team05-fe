import styled from "styled-components";

export const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
`;

export const BigText = styled.p`
    padding: 0;
    margin: 10px 0 20px 0;
    font-weight: bold;
    color: black;
    font-size: 25px;
`;

export const Text = styled.p`
  font-weight: bold;
  color: #6D717D;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const MenuList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;

export const CheckLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: 15px;
  font-size: 14px;
  color:#8094B3;
  cursor: pointer;

  input {
    cursor: pointer;
  }
`;

export const MenuItem = styled.button<{
	$selected: boolean;
	$disabled?: boolean;
}>`
	width: 132px;
	height: 44px;
	border-radius: 5px;
	padding: 0;
	border: 1.5px solid ${({ $selected }) => ($selected ? "#8094B3" : "#8094B3")};
	background-color: ${({ $selected }) => ($selected ? "#8094B3" : "transparent")};
	color: ${({ $selected }) => ($selected ? "white" : "#8094B3")};
	font:var(--MenuTitle2);
	cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
	opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
	pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
	transition: all 0.2s;
	text-align: center;
  
	&:hover {
	  background-color: ${({ $selected, $disabled }) =>
		$disabled ? "transparent" : $selected ? "#667da1" : "#f2f2f2"};
	}
  `;



export const WholeReviewInput = styled.textarea`
  margin: 10px 0;
  border: 2px solid #E2E2E4;
  border-radius: 6px;
  width: calc(100% - 24px);
  height: 130px;
  padding: 10px;
  font-family: sans-serif;
  color: black;
  font-weight: bold;
  font-size: 18px;

  &::placeholder {
    color: #6D717D;
    font-weight: bold;
  }
`;

export const SubmitBtn = styled.button`
  font-weight: bold;
  font-size: 18px;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: black;
  margin: 30px 0 30px auto;
  border: none;
`;
