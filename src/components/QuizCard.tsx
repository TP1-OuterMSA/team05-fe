import * as S from "../styles/admin/QuizCardComponentStyle";
import Check from "../assets/images/team5/Check.png";
import NonCheck from "../assets/images/team5/NonCheck.png";

interface QuizCardProps {
  index: number;
  question: string;
  setQuestion: (value: string) => void;

  options: [string, string, string, string];
  setOptions: (options: [string, string, string, string]) => void;

  answer: number;
  setAnswer: (value: number) => void;

  canEdit: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  index,
  question,
  setQuestion,
  options,
  setOptions,
  answer,
  setAnswer,
  canEdit,
}) => {
  const handleCheck = (checkNum: number) => {
    console.log(checkNum);
    if (canEdit) setAnswer(checkNum);
  };

  const handleInputChange = (idx: number, value: string) => {
    const newOptions = [...options];
    newOptions[idx] = value;
    setOptions(newOptions as [string, string, string, string]);
  };

  return (
    <S.CardDiv>
      <S.QuizText>퀴즈 {index + 1}</S.QuizText>
      <S.QuizInputDiv>
        <S.Text style={{ color: canEdit ? "black" : "#6D717D" }}>
          질문을 입력해주세요.
        </S.Text>
        <S.QuestionInput
          $canedit={canEdit}
          value={question}
          placeholder="질문을 입력해주세요."
          onChange={(e) => setQuestion(e.target.value)}
          readOnly={!canEdit}
        />
        <S.Text style={{ color: canEdit ? "black" : "#6D717D" }}>
          보기를 입력해주세요.
        </S.Text>
        <S.OptionDiv>
          {[0, 1, 2, 3].map((_, i) => (
            <S.OptionPersonalDiv key={i}>
              <S.OptionPersonalText
                style={{ color: canEdit ? "black" : "#6D717D" }}
              >
                {i + 1}번.
              </S.OptionPersonalText>
              <S.OptionPersonalInput
                $canedit={canEdit}
                value={options[i]}
                placeholder="보기를 입력해주세요."
                onChange={(e) => handleInputChange(i, e.target.value)}
                readOnly={!canEdit}
              />
              <S.OptionPersonalImg
                src={i === answer ? Check : NonCheck}
                onClick={() => {
                  if (options[i].trim() !== "") {
                    handleCheck(i);
                  }
                }}
              />
            </S.OptionPersonalDiv>
          ))}
        </S.OptionDiv>
      </S.QuizInputDiv>
    </S.CardDiv>
  );
};
