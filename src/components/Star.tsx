
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import * as S from '../styles/Home/StarComponentStyle';
// import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface StarProps {
	rating: number;
	onChangeRating: (newRating: number) => void;
}

const Star: React.FC<StarProps> = ({ rating, onChangeRating }) => {
	// const location = useLocation();
	// const mealType = location.state?.mealType || "default";

	const [stars, setStars] = useState<(0 | 1 | 2)[]>([0, 0, 0, 0, 0]); // 0: 빈 별, 1: 반 별, 2: 꽉 찬 별


	//지피티 코드 입니다............
	const handleClick = (index: number) => {
		const updatedStars = stars.map((value, i) => {
			if (i < index) return 2;
			if (i === index) return stars[i] === 1 ? 2 : 1;
			return 0;
		});

		setStars(updatedStars); // 먼저 상태 업데이트

		const newRating = parseFloat((updatedStars.reduce((sum, s) => sum + s, 0) / 2).toFixed(1));
		onChangeRating(newRating); // 업데이트된 상태를 기반으로 부모에 전달
		console.log(`${newRating}점`);
	};

	//지피티 코드 입니다............
	useEffect(() => {
		const fullStars = Math.floor(rating); // 꽉 찬 별 개수
		const halfStar = rating % 1 >= 0.5 ? 1 : 0; // 반 별 존재 여부

		const updatedStars = Array(5)
			.fill(0)
			.map((_, i) => {
				if (i < fullStars) return 2;
				if (i === fullStars && halfStar) return 1;
				return 0;
			});

		setStars(updatedStars);

		// 이건 optional인데, rating이 바뀔 때 부모에게도 다시 알려주고 싶다면:
		onChangeRating(rating);
	}, [rating]);



	const renderIcon = (state: number) => {
		switch (state) {
			case 1:
				return <FaStarHalfAlt />; // 반 별
			case 2:
				return <FaStar />; // 꽉 찬 별
			default:
				return <FaRegStar />; // 빈 별
		}
	};

	return (
		<S.Wrapper>
			<S.StarsWrapper>
				{stars.map((state, index) => (
					<S.StarButton
						key={index}
						onClick={() => handleClick(index)}
						value={rating}
					>
						{renderIcon(state)}
					</S.StarButton>
				))}
			</S.StarsWrapper>

			{/* <p>선택한 별점: {(stars.reduce((sum, s) => sum + s, 0) / 2).toFixed(1)}점</p> */}
		</S.Wrapper>
	);
}

export default Star;