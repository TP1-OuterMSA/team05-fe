import { useNavigate } from "react-router-dom";
import * as S from "../styles/quiz/QuizSuccessComponentStyle";
import Ghost_success from "../assets/images/team5/quiz_success_icon.png";


const QuizSuccess = () => {
  const navigate = useNavigate();

  return (
    <S.ResultContainer>
    <S.Text>오늘의 학식 골든벨 퀴즈</S.Text>
    <S.GhostImg src={Ghost_success}/>
    <h1 style={{marginBottom:"0"}}>정답입니다!!</h1>
    <h2>퀴즈를 모두 맞혔어요!</h2>
      <S.ConfirmButton onClick={() => navigate("/team5")}>
        확인
      </S.ConfirmButton>
    </S.ResultContainer>
  );
};

export default QuizSuccess;
