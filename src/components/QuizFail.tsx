import { useNavigate } from "react-router-dom";
import * as S from "../styles/quiz/QuizFailComponentStyle";
import ghost_icon from "../assets/images/team5/quiz_icon.png";


const QuizFail = () => {
  const navigate = useNavigate();

  return (
    <S.ResultContainer>
      <S.Text>오늘의 학식 골든벨 퀴즈</S.Text>
      <S.GhostImg src={ghost_icon}/>
      <h1  style={{marginBottom:"0"}}>아쉬워요...!!</h1>
      <h2>내일은 만점 도전?</h2>
      <S.ConfirmButton onClick={() => navigate("/team5")}>
        확인
      </S.ConfirmButton>
    </S.ResultContainer>
  );
};

export default QuizFail;
