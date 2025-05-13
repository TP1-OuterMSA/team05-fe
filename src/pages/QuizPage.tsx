import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/quiz/QuizPageStyle"
import HalfCircleProgress from "../components/HalfCircleProgress";
import FileImg from "../assets/images/team5/file.png";
import Carrot from "../assets/images/team5/carrot.png";
import { foodListDummy } from "../api/foodListDummy";
import PhoneModal from "../components/modal/PhoneModal";
import { getQuiz } from "../api/adminQuiz";

interface CardProps{
	id: number;
	question: string;
	correctChoiceId: number;
	choiceDtoList: ChoiceDtoList[];
}

interface ChoiceDtoList{
	id: number;
	content: string;
}

export default function QuizPage() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const navigate = useNavigate();
  const listNum = foodListDummy.length;
  const [showModal, setShowModal] = useState(false);
  const [quizData, setQuizData] = useState<CardProps[]>([]);

  useEffect(() => {
    // const phone = localStorage.getItem("userPhone");
    //여기에 get
    
    const fetchQuiz = async () => {
      setShowModal(true); // 모달 보여주기
      try {
        const response = await getQuiz(); // 실제 API 호출
        const rawQuizzes: CardProps[] = response.result.quizzes.slice(0,3);

        const formatted = rawQuizzes.map((quiz) => {
        const answerIndex = quiz.choiceDtoList.findIndex(
          (choice) => choice.id === quiz.correctChoiceId
        );

        return {
          id: quiz.id,
          question: quiz.question,
          correctChoiceId: answerIndex,
          choiceDtoList: quiz.choiceDtoList,
        };
        });
        setQuizData(formatted);
      } catch (err) {
        console.error("퀴즈 불러오기 실패:", err);
      }
    };

    fetchQuiz();
    setShowModal(true);
  }, []);

	const handleOptionClick = (option: number) => {
    const isCorrect = option === quizData[currentQuiz].correctChoiceId;

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
		if (currentQuiz < quizData.length - 1) {
			setCurrentQuiz((prev) => prev + 1);
		} else {
			if (correctCount + (option === quizData[currentQuiz].correctChoiceId ? 1 : 0) === quizData.length) {
				navigate("/team5/quiz/quizSuccess");
			} else {
				navigate("/team5/quiz/quizFail");
			}
		}
	};

	const progressPercent = ((currentQuiz) / quizData.length) * 100;

  return (
    <S.Container>
      {showModal && <PhoneModal onClose={() => setShowModal(false)} />}
        <S.Text>오늘의 학식 골든벨 퀴즈</S.Text>
        <HalfCircleProgress progress={progressPercent} /> 
      {quizData.length > 0 && (
        <>
          <S.QuizNumDiv>
            <S.QuizNum>{currentQuiz + 1}/3</S.QuizNum>
            <p style={{ fontWeight: "bold", fontSize: "18px", lineHeight: "2px" }}>
              개
            </p>
          </S.QuizNumDiv>

          <S.QuizBox>
            <S.Question>{quizData[currentQuiz].question}</S.Question>
            <S.Options>
            {quizData[currentQuiz].choiceDtoList.map((opt, idx) =>
              opt.content.trim() !== "" && (
                <S.Option key={idx} onClick={() => handleOptionClick(idx)}>
                  {opt.content}
                </S.Option>
              )
            )}
          </S.Options>

          </S.QuizBox>
        </>
      )}
      <S.ButtonBox>
        <S.SchoolRestaurantBtn onClick={() => navigate("/team5/foodList")}><S.BtnImg src={FileImg}/><div><p>학교 근처 맛집</p><p>{listNum}개</p></div></S.SchoolRestaurantBtn>
        <S.VoteBtn onClick={()=>navigate('/team5/guessRate')}><S.BtnImg src={Carrot}/><p>오늘의 학식</p><p>골든벨 퀴즈</p></S.VoteBtn>
      </S.ButtonBox>
    </S.Container>
  );
}
