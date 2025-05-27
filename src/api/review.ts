import { api } from ".";

export async function getTodayMeal(mealType: string) {
	try {
		const response = await api.get(`/meals/today?mealType=${mealType}`);
		console.log("getTodayMeal에 성공했습니다.");
		return response.data;
	} catch (error) {
		throw error;
	}
}

export async function postReview(
	token: string,
	mealId: number,
	menuRatings: { [menu: string]: number },
	overallOpinion: string | null,
	menuQuestions: { [menu: string]: string },
	menuAnswers: { [menu: string]: string } | null,
	freeOpinion: string | null
) {
	try {
		await api.post(`/reviews`, {
			token,
			mealId,
			menuRatings,
			overallOpinion,
			menuQuestions,
			menuAnswers,
			freeOpinion,
		});
	} catch (error) {
		throw error;
	}
}

export async function getQuestions(mealType: string){
	try{
		const response = await api.get(`/questions?mealType=${mealType}`);
		console.log(response.data);
		return response.data;
	}catch(error) {
		throw error;
	}
}

export async function postToken(token: string){
	try{
		const response = await api.get(`/reviews/token/${token}`);
		return response.data;
	}catch(error){
		throw error;
	}
}

export async function postTestToken(token: string){
	try{
		await api.get(`/reviews/check/${token}`);
	}catch(error){
		throw error;
	}
}