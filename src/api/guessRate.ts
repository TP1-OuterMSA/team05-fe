import { api } from ".";

//api 명 오류였다고... api/team5 붙여달라고 요구
export async function postGuessRate(rating: number, phoneNumber: string, date: string) {
    try {
        console.log(rating, phoneNumber, date);
        await api.post(`/ratings/predicted`, {rating, phoneNumber, date});
    } catch (error) {
        throw error;
    }
}