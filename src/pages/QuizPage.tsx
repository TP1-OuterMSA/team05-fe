import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/quiz/QuizPageStyle"
import HalfCircleProgress from "../components/HalfCircleProgress";
import FileImg from "../assets/images/file.png";
import Carrot from "../assets/images/carrot.png";

const quizData = [
  {
    question: "오늘의 메뉴가 아닌 것은 무엇인가요?",
    options: ["김치찌개", "랍스터", "현미밥", "콩나물"],
    answer: "랍스터",
  },
  {
    question: "팀프로젝트1 교수님 성함은?",
    options: ["김일주 교수님", "김정호 교수님", "김대원 교수님", "이강선 교수님"],
    answer: "김정호 교수님",
  },
  {
    question: "team5 팀원이 아닌 사람은?",
    options: ["한승규", "김홍민", "박하영", "김소연"],
    answer: "김홍민",
  },
];

export default function QuizPage() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const navigate = useNavigate();

  const handleOptionClick = (option: string) => {
    if (option === quizData[currentQuiz].answer) {
      setCorrectCount((prev) => prev + 1);
    }
    if (currentQuiz < quizData.length - 1) {
      setCurrentQuiz((prev) => prev + 1);
    } else {
      if (correctCount + (option === quizData[currentQuiz].answer ? 1 : 0) === quizData.length) {
        navigate("/team5/quiz/quizSuccess");
      } else {
        navigate("/team5/quiz/quizFail");
      }
    }
  };

  const progressPercent = ((currentQuiz) / quizData.length) * 100;

  return (
    <S.Container>
        <S.Text>오늘의 학식 골든벨 퀴즈</S.Text>
        <HalfCircleProgress progress={progressPercent} /> 
        <S.QuizNumDiv>
            <S.QuizNum>{currentQuiz+1}/3</S.QuizNum>
            <p style={{fontWeight:"bold", fontSize:"18px", lineHeight:"2px"}}>개</p>
        </S.QuizNumDiv>
      <S.QuizBox>
        <S.Question>{quizData[currentQuiz].question}</S.Question>
        <S.Options>
          {quizData[currentQuiz].options.map((opt) => (
            <S.Option key={opt} onClick={() => handleOptionClick(opt)}>
              {opt}
            </S.Option>
          ))}
        </S.Options>
      </S.QuizBox>
      <S.ButtonBox>
        <S.SchoolRestaurantBtn onClick={() => navigate("/team5/food")}><S.BtnImg src={FileImg}/><div><p>학교 근처 맛집</p><p>n개</p></div></S.SchoolRestaurantBtn>
        <S.VoteBtn><S.BtnImg src={Carrot}/><p>제일 기대되는</p><p>학식 투표</p></S.VoteBtn>
      </S.ButtonBox>
    </S.Container>
  );
}
