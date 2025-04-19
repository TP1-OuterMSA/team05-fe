export const getGPTQuestion = async (menuName: string): Promise<string> => {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 대기

	const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
	const gptUrl = import.meta.env.VITE_OPENAI_API_URL;
	const response = await fetch(gptUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
			"OpenAI-Project": "proj_GqFQUyvIEXk1yOB6VnpSFAWH",
		},
		body: JSON.stringify({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content: `학생식당에서 제공된 ${menuName} 메뉴에 대해 평가를 유도하는 질문 하나를 만들어줘. 
					맛, 온도, 식감, 양, 개선점 등 중 하나를 자연스럽게 물어보는 형식이면 좋아.한문장 이내로 해줘.`
					,
				},
			],
			max_tokens: 100,
		}),
	});

	if (!response.ok) {
		const error = await response.json();
		console.error("GPT 요청 에러:", error);
		throw new Error("GPT 요청 실패");
	}

	const data = await response.json();
	return data.choices?.[0]?.message?.content?.trim() || "질문 생성 실패";
};
