import { api } from ".";

export async function getLastReview(mealType: string) {
    try {
        const response = await api.get(`/reviews?mealType=${mealType}`);
        console.log("getLastReview에 성공했습니다.");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getTodayReview(date: string, mealType: string) {
    try {
        const response = await api.get(`/reviews/${date}?mealType=${mealType}`);
        console.log("getTodayReview에 성공했습니다.");
        return response.data;
    } catch (error) {
        throw error;
    }
}