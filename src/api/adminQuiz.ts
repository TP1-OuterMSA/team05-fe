import { api } from ".";

export async function getQuiz() {
    try {
        const response = await api.get(`quizzes/admin`);
        console.log("getQuiz에 성공했습니다.");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function postQuiz(question: string, choices: string[], correctIndex: number) {
  try {
    const formattedChoices = choices.map(content => ({ content }));
    await api.post(`quizzes/admin`, {
      question,
      choices: formattedChoices,
      correctIndex
    });
    console.log("postQuiz 성공했습니다.");
  } catch (error) {
    console.error("postQuiz 실패:", error);
    throw error;
  }
}

export async function putQuiz(quizId: number, question: string, choices: string[], correctIndex: number) {
    try {
        const formattedChoices = choices.map(content => ({ content }));
        await api.put(`quizzes/admin/${quizId}`, {question, choices:formattedChoices, correctIndex});
        console.log("putQuiz 성공했습니다.");
    } catch (error) {
        throw error;
    }
}