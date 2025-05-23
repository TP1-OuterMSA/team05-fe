import { useState } from "react";
import * as S from "../styles/quiz/QuizResultPageStyle";
import Calendar from "../components/Calendar";
import Star from "../components/Star";

interface ResultItem {
	phoneNumber: string;
	currentPoint: number;
}

export default function GuessRateResultPage() {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [averageScore, setAverageScore] = useState<number | null>(4.3);
	const [winners, setWinners] = useState<ResultItem[]>([
		{ phoneNumber: "01012345678", currentPoint: 17 },
		{ phoneNumber: "01087654321", currentPoint: 12 },
	]);
	const [searchTerm, setSearchTerm] = useState("");

	const formattedDate = selectedDate.toLocaleDateString("ko-KR", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const filteredWinners = winners.filter((w) =>
		w.phoneNumber.slice(-4).includes(searchTerm)
	);

	return (
		<S.Container>
			<S.Header>
				{/* <S.Weather>🌞 15°C 양천구</S.Weather> 이거 구현 할말 고민 중중*/}
				<S.Title>우리 학교의 학식 평가는?</S.Title>
			</S.Header>

			<S.Content>
				<S.CalendarSection>
					<Calendar onChange={setSelectedDate} value={selectedDate} />
				</S.CalendarSection>

				<S.ResultSection>
					<S.SelectedDate>{formattedDate}의 평균 평점은?</S.SelectedDate>
					{averageScore !== null && (
						<>
							<S.Score>{averageScore.toFixed(1)}점</S.Score>
							<S.StarRow>
								<Star rating={averageScore} onChangeRating={() => { }} />
							</S.StarRow>
						</>
					)}

					<S.WinnerTitle>{formattedDate} 이벤트 당첨자(정답자)</S.WinnerTitle>

					<S.SearchInput
						type="text"
						inputMode="numeric"
						pattern="[0-9]*"
						placeholder="전화번호 뒷자리 입력"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value.replace(/\D/g, ""))}
					/>

					{filteredWinners.length > 0 ? (
						filteredWinners.map((w) => (
							<S.WinnerBox key={w.phoneNumber}>
								<p>{w.phoneNumber.slice(-4)}번</p>
								<p>+1점</p>
								<p>현재 {w.currentPoint}점</p>
							</S.WinnerBox>
						))
					) : (
						<S.NoWinner>정답자가 아니에요🥲</S.NoWinner>
					)}
				</S.ResultSection>
			</S.Content>
		</S.Container>
	);
}
