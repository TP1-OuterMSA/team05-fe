import { api } from ".";

export async function postPoint(phoneNumber: string, point: number) {
    try {
        await api.post(`/users/earn`, {phoneNumber, point});
    } catch (error) {
        throw error;
    }
}

export async function postPhoneNum(phoneNumber: string) {
    try {
        const response = await api.post(`/users/ensure`, {phoneNumber});
        return response.data;
    } catch (error) {
        throw error;
    }
}