import { useEffect, useState } from 'react';

type Review = {
	id: number;
	title: string;
	content: string;
};

const ViewReviewPage = () => {
	const [data, setData] = useState<Review[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// TODO: 추후 DB에서 Review 데이터 fetch
		const fakeData: Review[] = [
			{ id: 1, title: '오늘 중식 너무 맛있었어요!', content: '특히 제육이 최고!' },
			{ id: 2, title: '석식 평범했음', content: '다음엔 다른 메뉴 기대함' },
		];

		setTimeout(() => {
			setData(fakeData);
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<div style={{ padding: '40px', textAlign: 'center' }}>
			<h2>리뷰 페이지</h2>
			{loading ? (
				<p>데이터를 불러오는 중입니다...</p>
			) : data.length === 0 ? (
				<p>리뷰가 아직 없습니다.</p>
			) : (
				<ul>
					{data.map((item) => (
						<li key={item.id}>
							<strong>{item.title}</strong>
							<p>{item.content}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ViewReviewPage;
