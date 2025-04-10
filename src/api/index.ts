import axios from "axios";

export const api = axios.create({
	baseURL: "http://43.200.49.98:8080/",
	timeout: 5000,
});
//cors error 확인 필요