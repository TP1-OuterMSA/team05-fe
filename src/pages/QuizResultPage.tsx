import { useEffect, useState } from "react";
import * as S from "../styles/quiz/QuizResultPageStyle";
import Calendar from "../components/Calendar";
import Star from "../components/Star";
import { getAverageRate, getRatingResult } from "../api/guessRatingResult";

interface ResultItem {
	phoneNumber: string;
	point: number;
}

export default function GuessRateResultPage() {
	const [data, setData] = useState<boolean>(false);
	const [reviewData, setReviewData] = useState<boolean>(true);//이미 지난 날짜지만 아무도 리뷰를 남기지 않아서 데이터가 없을 경우
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [averageScore, setAverageScore] = useState<number | null>(0);
	const [winners, setWinners] = useState<ResultItem[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const filteredWinners = searchTerm
		? winners.filter((w) => w.phoneNumber.includes(searchTerm))
		: winners;

	const formattedDate = selectedDate.toLocaleDateString("ko-KR", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	useEffect(() => {
		const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
		console.log(formattedDate);

		setAverageScore(0); // 초기화

		// 오늘 날짜와 비교
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		const selected = new Date(selectedDate);
		selected.setHours(0, 0, 0, 0);

		if (selected >= today) {
			setData(false);
			return;
		} else {
			setData(true);
		}

		const handleFetchResult = async () => {
			try {
				const response = await getRatingResult(formattedDate);
				const avgData = await getAverageRate(formattedDate);
				const refinedavgData = avgData.result.average;
				setWinners(response.result);
				setAverageScore(refinedavgData);
				setReviewData(true);
			} catch (error) {
				setAverageScore(0);
				setReviewData(false);
			}
		};

		handleFetchResult();
	}, [selectedDate]);


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

					{data ?
						<>
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
										<p>{w.phoneNumber}번</p>
										<p>+1점</p>
										<p>현재 {w.point}점</p>
									</S.WinnerBox>
								))
							) : searchTerm ? (
								<S.NoWinner>정답자가 아니에요🥲</S.NoWinner>
							) : (
								reviewData ? <S.NoWinner>정답자가 없어요😢</S.NoWinner> : <S.NoWinner>아무도 리뷰를 남기지 않았어요😢</S.NoWinner>
							)}
						</> : <><S.NoWinner>아직 이벤트를 진행하지 않았어요.</S.NoWinner></>}
				</S.ResultSection>
			</S.Content>
		</S.Container>
	);
}
