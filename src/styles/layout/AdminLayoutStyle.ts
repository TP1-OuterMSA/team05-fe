import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	min-height: 100vh;
`;

export const Sidebar = styled.div`
	width: 140px;
	background-color: white;
	display: flex;
	flex-direction: column;
	padding-top: 30px;
	padding-left: 20px;
	padding-right: 10px;
	gap: 30px;
`;

export const MenuButton = styled.button<{ $active: boolean }>`
	background-color: ${({ $active }) => ($active ? "#000" : "transparent")};
	color: ${({ $active }) => ($active ? "#F9FAFC" : "#6D717D")};
	border: none;
	font-weight: bold;
	font-size: 15px;
	cursor: pointer;
	border-radius: 6px;
	padding: 10px 0;
	text-align: center;
	transition: all 0.2s;

	&:hover {
		background-color: ${({ $active }) => ($active ? "#000" : "#eaeaea")};
	}
`;

export const Content = styled.div`
	flex: 1;
	background-color: white;
	padding: 30px;
`;
