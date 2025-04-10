import styled from "styled-components";

export const ReviewDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    box-shadow: 0 1px 10px rgb(0, 0, 0, 0.1);
`;

export const BigText = styled.p`
    padding: 0;
    margin: 10px 0 20px 0;
    font-weight: bold;
    font-color: black;
    font-size: 25px;
`;

export const MealTypeDiv = styled.p`
    margin: 0 0 10px 0;
    padding: 0 0 20px 0;
    border-bottom: 2px solid  #6D717D;
    font-weight: bold;
    font-color: black;
    font-size: 20px;
`;

export const MealTypeLabel = styled.label`
    margin-right: 20px;
    cursor: pointer;
`;

export const Text = styled.p`
    font-weight: bold;
    color: #6D717D;
    font-size: 18px;
    padding: 0;
    margin: 0;
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

    &::placeholder{
        font-family: sans-serif;
        color: #6D717D;
        font-weight: bold;
        font-size: 18px;
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