import { useState } from "react";
import * as S from "../styles/Home/RankingPageStyle";
import SearchIcon from "../assets/images/team5/Search.png";

const dummyTop3 = [
	{ userId: 1, phone: "1234", point: 1219 },
	{ userId: 2, phone: "5678", point: 1023 },
	{ userId: 3, phone: "4321", point: 963 },
];

const dummyUsers = [
	{ userId: 56, phone: "9876", point: 140, ranking: 4 },
	{ userId: 1, phone: "1234", point: 1219, ranking: 1 },
	{ userId: 2, phone: "5678", point: 1023, ranking: 2 },
	{ userId: 3, phone: "4321", point: 963, ranking: 3 },
	{ userId: 4, phone: "3468", point: 34, ranking: 5 },
	{ userId: 5, phone: "9862", point: 2, ranking: 7 },
	{ userId: 6, phone: "1204", point: 23, ranking: 6 },
];

export default function RankingPage() {
	const [searchValue, setSearchValue] = useState("");
	const [activeTab, setActiveTab] = useState("일간");

	const filteredUsers = (searchValue
		? dummyUsers.filter((user) => user.phone.includes(searchValue))
		: dummyUsers
	).sort((a, b) => a.ranking - b.ranking);


	return (
		<S.Container>
			<S.Title>Top 3</S.Title>

			<S.PodiumContainer>
				<S.Top3UserProfile>
					<S.Top>
						<S.Medal>🥈</S.Medal>
						<S.InfoText>{dummyTop3[1].phone}번</S.InfoText>
						<S.ScoreText>{dummyTop3[1].point}점</S.ScoreText>
					</S.Top>
					<S.Top>
						<S.Medal>🥇</S.Medal>
						<S.InfoText>{dummyTop3[0].phone}번</S.InfoText>
						<S.ScoreText>{dummyTop3[0].point}점</S.ScoreText>
					</S.Top>
					<S.Top>
						<S.Medal>🥉</S.Medal>
						<S.InfoText>{dummyTop3[2].phone}번</S.InfoText>
						<S.ScoreText>{dummyTop3[2].point}점</S.ScoreText>
					</S.Top>
				</S.Top3UserProfile>
			</S.PodiumContainer>

			{/* 필터 + 검색 */}
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
						type="text"
						placeholder="전화번호 검색"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</S.SearchContainer>
			</S.FilterAndSearchWrapper>

			{/* 전체 랭킹 테이블 */}
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
							<S.TableRow key={user.userId}>
								<S.TableCell>{user.ranking}위</S.TableCell>
								<S.TableCell>{user.phone}번</S.TableCell>
								<S.TableCell>{user.point}점</S.TableCell>
							</S.TableRow>
						))}
					</S.TableBody>
				</S.RankingTable>
			</S.RankingContainer>
		</S.Container>
	);
}
