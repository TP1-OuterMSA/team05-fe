import styled from "styled-components";

export const EachReviewDiv = styled.div`
    background-color: #F9FAFC;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 20px;
`;

export const DetailText = styled.p`
    font-weight: bold;
    color: #6D717D;
    font-size: 18px;
    padding: 0;
    margin: 0 0 20px 0;
`;

export const DetailReviewInput = styled.textarea`
    border: 2px solid #E2E2E4;
    border-radius: 6px;
    width: calc(100% - 24px);
    height: 100px;
    padding: 10px;
    font-family: sans-serif;
    color: black;
    font-weight: bold;
    font-size: 18px;

    &::placeholder{
        font-family: sans-serif;
        color: #6D717D;
        font-weight: bold;
        font-size: 18px;
    }
`;