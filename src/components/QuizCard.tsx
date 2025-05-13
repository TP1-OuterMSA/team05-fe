import { useEffect } from "react";
import * as S from "../styles/admin/QuizCardComponentStyle";
import Check from "../assets/images/team5/Check.png";
import NonCheck from "../assets/images/team5/NonCheck.png";

interface QuizCardProps {
  index: number;
  question: string;
  setQuestion: (value: string) => void;

  options: [string|"", string|"", string|"", string|""];
  setOptions: (options: [string, string, string, string]) => void;

  answer: number;
  setAnswer: (value: number) => void;

  canEdit: boolean;
}


export const QuizCard:React.FC<QuizCardProps> = ({index, question, setQuestion, options, setOptions, answer, setAnswer, canEdit}) => {

	useEffect(()=>{
		setAnswer(answer);
	},[answer])

	const handleCheck = (checkNum: number) => {
		if(canEdit) setAnswer(checkNum)
	}

	const handleInputChange = (index: number, value: string) => {
		const newOptions = [...options];
		newOptions[index] = value;
		setOptions(newOptions as [string, string, string, string]);
	};


	return (
		<S.CardDiv>
			<S.QuizText>퀴즈{index+1}</S.QuizText>
			<S.QuizInputDiv>
				<S.Text style={{color:canEdit?"black":"#6D717D"}}>질문을 입력해주세요.</S.Text>
				<S.QuestionInput $canedit={canEdit} value={question?question:""} placeholder={question.trim()!=""?question:"질문을 입력해주세요."} onChange={(e) => setQuestion(e.target.value)} readOnly={!canEdit}/>
				<S.Text style={{color:canEdit?"black":"#6D717D"}}>보기를 입력해주세요.</S.Text>
				<S.OptionDiv>
					{options?.map((value, index)=>(
						<S.OptionPersonalDiv key={index}>
							<S.OptionPersonalText style={{color:canEdit?"black":"#6D717D"}}>{index+1}번.</S.OptionPersonalText>
							<S.OptionPersonalInput $canedit={canEdit} value={value?value:""} placeholder={value?value:"보기를 입력해주세요."} onChange={(e) => handleInputChange(index, e.target.value)} readOnly={!canEdit}/>
							<S.OptionPersonalImg src={index==answer?Check:NonCheck} onClick={()=>{if(value.trim()!==""){handleCheck(index);}}}/>
						</S.OptionPersonalDiv>
					))}
				</S.OptionDiv>
			</S.QuizInputDiv>
		</S.CardDiv>
	);
};
