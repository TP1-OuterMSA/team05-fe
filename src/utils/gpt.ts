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
			model: "gpt-4-turbo",
			messages: [
				{
					role: "user",
					content: `${menuName} 메뉴의 특징을 고려해서, 맛/식감/온도/향 중 **가장 어울리는 하나만 선택**해.  
					그에 맞는 **질문 하나만 생성**해줘.  
					
					질문 조건:  
					- **40자 이내**  
					- **자연스러운 한국어 문장**  
					- **질문은 하나만**  
					- **번호나 따옴표 없이 질문 문장만 출력**
					
					예시:  
					돈까스 치즈의 풍미는 살아있었나요?`
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
