import { useNavigate } from "react-router-dom";
import * as S from "../styles/quiz/QuizSuccessComponentStyle";
import Ghost_success from "../assets/images/team5/quiz_success_icon.png";
import { useEffect, useState } from "react";
import { postPoint } from "../api/quiz";


const QuizSuccess = () => {
  const navigate = useNavigate();
  const [userPhone, setUserPhone] = useState<string|null>();
  const [userPoint, setUserPoint] = useState<string|null>();

  useEffect(() => {
    const storedPhone = localStorage.getItem("userPhone");
    const storedPoint = localStorage.getItem("userPoint");
  
    setUserPhone(storedPhone);
    setUserPoint(storedPoint);
  
    const fetchPoint = async () => {
      try {
        const numericPoint = parseInt(storedPoint ?? "0") + 1;
        await postPoint(storedPhone ?? "", numericPoint);
        localStorage.setItem("userPoint", numericPoint.toString());
        setUserPoint(numericPoint.toString());
      } catch (error) {
        console.error("포인트 전송 실패:", error);
      }
    };
  
    fetchPoint();
  }, []);
  

  return (
    <S.ResultContainer>
    <S.Text>오늘의 학식 골든벨 퀴즈</S.Text>
    <S.GhostImg src={Ghost_success}/>
    <h1 style={{marginBottom:"0"}}>정답입니다!!</h1>
    <h2>퀴즈를 모두 맞혔어요!</h2>
    <h2>{userPhone} 님의 포인트는</h2>
    <h3>{userPoint}점 입니다.</h3>
      <S.ConfirmButton onClick={() => navigate("/team5")}>
        확인
      </S.ConfirmButton>
    </S.ResultContainer>
  );
};

export default QuizSuccess;
