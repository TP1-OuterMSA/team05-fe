import { api } from ".";

export async function postStarRate(mealType: string, rating: number) {
  console.log(mealType, rating);
    try {
      await api.post(`reviews/star`, {mealType:mealType, rating:rating});
      console.log("postStarRate에 성공했습니다.");
    } catch (error) {
      throw error;
    }
  }