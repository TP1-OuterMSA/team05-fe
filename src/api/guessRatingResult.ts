import { api } from ".";

export async function getRatingResult(date: string) {
    try {
        const response = await api.get(`/users/ranking/${date}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getAverageRate(date: string) {
    try {
        // console.log(date);
        const response = await api.get(`/meals/menus/rating/${date}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}