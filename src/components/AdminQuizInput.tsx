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
		for (let i = 0; i < 3; i++) {
		const currentId = i+1;
		const currentQuestion = question[i];
		const currentOptions = optionsList[i];
		const currentAnswer = answers[i];

		//질문을 하나라도 입력하지 않았을 시
		if(currentQuestion.trim()==""){
			alert('질문을 입력해주세요.');
			return;
		}

		//보기를 2개 이상 입력하지 않았을 시
		const filledOptions = currentOptions.filter(opt => opt.trim() !== "");
		if (filledOptions.length < 2) {
			alert('보기를 2개 이상 입력해주세요.');
			return;
		}
		
		//0~3범위로 바꾼 다음 answer과 비교 
		//현재는 원래 퀴즈 데이터에서 correctid를 뽑아와서 각 퀴즈의 룹을 돌린 다음 index 증가
		//해야할건 origincard 데이터에서 correctid를 뽑아와서 answer과 비교
		const calculatedAnswers = originCards.map((card) => {
		const correctId = card.correctChoiceId;
		const index = card.choiceDtoList.findIndex((choice: any) => choice.id === correctId);
		return index; // 0~3 중 하나가 되어야 함
		});

		//아무것도 없는 보기에 체크 표시가 되어있을 시
		if (optionsList[i][answers[i]].trim() === "") {
		alert("입력된 보기에 체크 표시를 해주세요!");
		return;
		}

		//각 카드가 수정되지 않았을 시
		if (originCards?.[i]) {
			const isSame =
				originCards[i].question === question[i] &&
				calculatedAnswers[i] === answers[i] &&
				originCards[i].choiceDtoList
					.map((choice: any) => choice.content)
					.every((value: string, index: number) => value === optionsList[i][index].trim());

			console.log(originCards[i].question === question[i],
				calculatedAnswers[i] === answers[i],
				originCards[i].choiceDtoList
					.map((choice: any) => choice.content)
					.every((value: string, index: number) => value === optionsList[i][index].trim()))
			if (isSame) {
				if(i==2){
					alert('수정 사항이 없습니다.')
					return;
				}
				continue; 
			}
		}


		if (
			currentQuestion === "" &&
			currentOptions.every(opt => opt === "") &&
			currentAnswer === 0
		) {
			// 새 퀴즈: post
			await postQuiz(currentQuestion, currentOptions, currentAnswer);
			console.log(`퀴즈 ${i + 1}번 POST 완료`);
		} 
		else {
			// 기존 퀴즈: put
			await putQuiz(currentId, currentQuestion, currentOptions, currentAnswer);
			console.log(`퀴즈 ${i + 1}번 PUT 완료`);
		}
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
