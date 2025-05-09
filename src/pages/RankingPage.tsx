import { useEffect, useRef, useState } from "react";
import * as S from "../styles/Home/RankingPageStyle";
import SearchIcon from "../assets/images/team5/Search.png";
import { getRanking } from "../api/ranking";

// 타입 정의
interface RankingItem {
	phoneNumber: string;
	point: number;
}

interface ExtendedRankingItem extends RankingItem {
	ranking: number;
}

export default function RankingPage() {
	const [searchValue, setSearchValue] = useState("");
	const [activeTab, setActiveTab] = useState("일간");
	const [rankingData, setRankingData] = useState<ExtendedRankingItem[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const tabMap: Record<string, "TOTAL" | "DAILY" | "WEEKLY" | "MONTHLY"> = {
					누적: "TOTAL",
					일간: "DAILY",
					주간: "WEEKLY",
					월간: "MONTHLY",
				};

				const data: RankingItem[] = await getRanking(tabMap[activeTab]);

				const rankedData: ExtendedRankingItem[] = data
					.sort((a, b) => b.point - a.point)
					.map((item, index) => ({
						...item,
						ranking: index + 1,
					}));

				setRankingData(rankedData);
			} catch (error) {
				alert("랭킹 정보를 불러오지 못했습니다.");
			}
		};

		fetchData();
	}, [activeTab]);

	const filteredUsers = searchValue
		? rankingData.filter((user) =>
			user.phoneNumber.slice(-4).includes(searchValue)
		)
		: rankingData;


	const top3Users = rankingData.slice(0, 3);

	return (
		<S.Container>
			<S.Title>Top 3</S.Title>

			<S.PodiumContainer>
				<S.Top3UserProfile>
					{top3Users[1] && (
						<S.Top>
							<S.Medal>🥈</S.Medal>
							<S.InfoText>{top3Users[1].phoneNumber.slice(-4)}번</S.InfoText>
							<S.ScoreText>{top3Users[1].point}점</S.ScoreText>
						</S.Top>
					)}
					{top3Users[0] && (
						<S.Top>
							<S.Medal>🥇</S.Medal>
							<S.InfoText>{top3Users[0].phoneNumber.slice(-4)}번</S.InfoText>
							<S.ScoreText>{top3Users[0].point}점</S.ScoreText>
						</S.Top>
					)}
					{top3Users[2] && (
						<S.Top>
							<S.Medal>🥉</S.Medal>
							<S.InfoText>{top3Users[2].phoneNumber.slice(-4)}번</S.InfoText>
							<S.ScoreText>{top3Users[2].point}점</S.ScoreText>
						</S.Top>
					)}
				</S.Top3UserProfile>
			</S.PodiumContainer>

			<S.FilterAndSearchWrapper>
				<S.FilterTabs>
					{["누적", "일간", "주간", "월간"].map((tab) => (
						<span
							key={tab}
							className={activeTab === tab ? "active" : ""}
							onClick={() => setActiveTab(tab)}
						>
							{tab}
						</span>
					))}
				</S.FilterTabs>

				<S.SearchContainer icon={SearchIcon}>
					<input
						ref={inputRef}
						type="text"
						placeholder="전화번호 검색"
						inputMode="numeric"
						pattern="[0-9]*"
						value={searchValue}
						onChange={(e) => {
							const numericOnly = e.target.value.replace(/\D/g, "");
							setSearchValue(numericOnly);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter" && inputRef.current?.value) {
								setSearchValue(inputRef.current.value);
							}
						}}
					/>
					<button onClick={() => {
						if (inputRef.current?.value) {
							setSearchValue(inputRef.current.value);
						}
						inputRef.current?.focus();
					}}>
						<img src={SearchIcon} alt="검색" />
					</button>
				</S.SearchContainer>


			</S.FilterAndSearchWrapper>

			<S.RankingContainer>
				<S.RankingTable>
					<S.TableHeader>
						<S.TableRow>
							<S.TableHeaderItem>순위</S.TableHeaderItem>
							<S.TableHeaderItem>전화번호</S.TableHeaderItem>
							<S.TableHeaderItem>점수</S.TableHeaderItem>
						</S.TableRow>
					</S.TableHeader>
					<S.TableBody>
						{filteredUsers.map((user) => (
							<S.TableRow key={user.phoneNumber}>
								<S.TableCell>{user.ranking}위</S.TableCell>
								<S.TableCell>{user.phoneNumber.slice(-4)}번</S.TableCell>
								<S.TableCell>{user.point}점</S.TableCell>
							</S.TableRow>
						))}
					</S.TableBody>
				</S.RankingTable>
			</S.RankingContainer>
		</S.Container>
	);
}
