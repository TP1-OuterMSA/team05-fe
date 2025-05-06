import * as S from "../styles/quiz/GuessRatePageStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Star from "../components/Star";
import GhostImg from "../assets/images/team5/QuizGhost.png";

export default function GuessRatePage() {
	const [rating, setRating] = useState(0); // 기존 score -> rating으로 변경
	const navigate = useNavigate();

	const handleConfirm = () => {
		// 점수 저장 (localStorage)
		localStorage.setItem("guessRating", rating.toString());
		alert(`예상한 점수: ${rating}점`);
	};


	return (
		<S.Container>
			<S.Title>오늘의 학식 골든벨 퀴즈</S.Title>
			<S.Ghost src={GhostImg} alt="귀여운 유령" />
			<S.QuestionBox>
				<S.Question>오늘의 메뉴 평점 평균은 몇 점일까요?</S.Question>
				<S.SubText>0점 ~ 5점 사이에서 예측해보세요!</S.SubText>
			</S.QuestionBox>

			<S.InputArea>
				<S.ScoreInput
					type="number"
					min={0}
					max={5}
					step={0.1}
					value={rating}
					onChange={(e) => setRating(parseFloat(e.target.value))}
				/>

				<S.StarBox>
					<Star rating={rating} onChangeRating={setRating} />
				</S.StarBox>
				<S.SelectedText>현재 선택: {rating}점</S.SelectedText>
			</S.InputArea>

			<S.ConfirmButton onClick={handleConfirm}>정답 입력하기</S.ConfirmButton>
		</S.Container>
	);
}
