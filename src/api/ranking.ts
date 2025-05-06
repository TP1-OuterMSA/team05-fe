import { api } from ".";

// 랭킹 정보를 가져오는 API 함수
export async function getRanking(rankingType: "TOTAL" | "DAILY" | "WEEKLY" | "MONTHLY") {
	try {
		const response = await api.get(`/users/ranking?rankingType=${rankingType}`);
		console.log("✅ getRanking 성공:", response.data);
		return response.data.result;
	} catch (error) {
		console.error("❌ getRanking error:", error);
		throw error;
	}
}
