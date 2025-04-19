import axios from "axios";

export const api = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
	timeout: 5000,
});
//cors error 확인 필요