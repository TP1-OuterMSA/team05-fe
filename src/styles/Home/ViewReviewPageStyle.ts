import styled from "styled-components";

export const ViewReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EFF2F8;
    padding: 30px;
`;

export const BtnDiv = styled.div`
    margin-bottom: 30px;
    
    button{
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        padding: 10px 20px;
        border-radius: 6px;
    }
`;

export const ReviewBtn = styled.button<{$menu: String}>`
    background-color: ${({$menu})=>$menu=="메뉴 리뷰"?'black':'transparent'};
    color: ${({$menu})=>$menu=="메뉴 리뷰"?'#F9FAFC':'#6D717D'};
    border: ${({$menu})=>$menu=="메뉴 리뷰"?'6px':'none'};
`;

export const WantMenuBtn = styled.button<{$menu: String}>`
    background-color: ${({$menu})=>$menu=="먹고 싶은 메뉴"?'black':'transparent'};
    color: ${({$menu})=>$menu=="먹고 싶은 메뉴"?'#F9FAFC':'#6D717D'};
    border: ${({$menu})=>$menu=="먹고 싶은 메뉴"?'6px':'none'};
    margin-left: 30px;
`;
