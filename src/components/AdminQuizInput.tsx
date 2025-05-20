import { useEffect, useState } from "react";
import * as S from "../styles/admin/AdminQuizInputComponentStyle";
import Ghost from "../assets/images/team5/ghost_btn_icon.png";
import { QuizCard } from "./QuizCard";
import { getQuiz, postQuiz, putQuiz } from "../api/adminQuiz";
import { useNavigate } from "react-router-dom";

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

export const AdminQuizInput = () => {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [question, setQuestion] = useState<string[]>(["", "", ""]);
	const [optionsList, setOptionsList] = useState<[string, string, string, string][]>([
	["", "", "", ""],
	["", "", "", ""],
	["", "", "", ""],
	]);
	const [answers, setAnswers] = useState<number[]>([0, 0, 0]);
	const [originCards, setOriginCards] = useState<CardProps[]>([]);
	const navigate = useNavigate();

	const handleSubmit = async () => {
  try {
    let isAnyQuizChanged = false;

    for (let i = 0; i < 3; i++) {
      const currentId = i + 1;
      const currentQuestion = question[i];
      const currentOptions = optionsList[i];
      const currentAnswer = answers[i];

      if (currentQuestion.trim() === "") {
        alert("질문을 입력해주세요.");
        return;
      }

      const filledOptions = currentOptions.filter(opt => opt.trim() !== "");
      if (filledOptions.length < 2) {
        alert("보기를 2개 이상 입력해주세요.");
        return;
      }

      const calculatedAnswers = originCards.map((card) => {
        const correctId = card.correctChoiceId;
        const index = card.choiceDtoList.findIndex(
          (choice: any) => choice.id === correctId
        );
        return index;
      });

      if (optionsList[i][answers[i]].trim() === "") {
        alert("입력된 보기에 체크 표시를 해주세요!");
        return;
      }

      if (originCards?.[i]) {
        const isSame =
          originCards[i].question === question[i] &&
          calculatedAnswers[i] === answers[i] &&
          originCards[i].choiceDtoList
            .map((choice: any) => choice.content.trim())
            .every((value: string, index: number) => value === currentOptions[index].trim());

        if (isSame) {
          continue;
        }
      }

      isAnyQuizChanged = true; // 하나라도 수정됨

      if (
        currentQuestion === "" &&
        currentOptions.every(opt => opt === "") &&
        currentAnswer === 0
      ) {
        await postQuiz(currentQuestion, currentOptions, currentAnswer);
      } else {
        await putQuiz(currentId, currentQuestion, currentOptions, currentAnswer);
      }
    }

    if (!isAnyQuizChanged) {
      alert("수정 사항이 없습니다.");
      return;
    }

    alert("반영되었습니다.");
    navigate(0);
  } catch (error) {
    console.error("반영 중 오류 발생:", error);
    alert("퀴즈 반영 중 오류가 발생했습니다.");
  }
};



	
	useEffect(() => {
	const fetchQuiz = async () => {
		try {
			const response = await getQuiz();
			console.log(response);
			const quizList = response.result.quizzes.slice(0, 3); // 최대 3개만 사용

			const questions = quizList.map((quiz: any) => quiz.question);
			const optionsList = quizList.map((quiz: any) =>
				quiz.choiceDtoList.map((choice: any) => choice.content)
			) as [string, string, string, string][];
			const answers = quizList.map((quiz: any) => {
			const correctId = quiz.correctChoiceId;
			const index = quiz.choiceDtoList.findIndex((choice: any) => choice.id === correctId);
			return index;
			});

			setQuestion(questions);
			setOptionsList(optionsList);
			setAnswers(answers);
			setOriginCards(quizList);
		} catch (error) {
			console.error(error);
		}
	};

	fetchQuiz();
}, []);


	return (
		<>
			<S.Container>
				<S.Title>
					<img src={Ghost} alt="고스트 아이콘" width={20} height={20} style={{ marginRight: "8px" }} />
					퀴즈 내용을 입력해주세요!
				</S.Title>
				<S.QuizDiv>
					{[0, 1, 2].map((_, index)=>(
						<QuizCard
							key={index}
							index={index}
							question={question[index]}
							setQuestion={(val) => {
							const newQuestions = [...question];
							newQuestions[index] = val;
							setQuestion(newQuestions);
							}}
							options={optionsList[index]}
							setOptions={(newOpts) => {
							const newList = [...optionsList];
							newList[index] = newOpts;
							setOptionsList(newList as [string, string, string, string][]);
							}}
							answer={answers[index]}
							setAnswer={(val) => {
							const newAnswers = [...answers];
							newAnswers[index] = val;
							setAnswers(newAnswers);
							}}
							canEdit={isEditing}
						/>
					))}
				</S.QuizDiv>
			</S.Container>
			<S.ButtonRow>
				<S.ActionButton variant="edit" onClick={() => setIsEditing(!isEditing)}>
					{isEditing ? "수정 완료" : "수정하기"}
				</S.ActionButton>
				<S.ActionButton variant="submit" onClick={handleSubmit}>
					반영하기
				</S.ActionButton>
			</S.ButtonRow>
		</>
	);
};
