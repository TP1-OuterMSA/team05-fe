import * as S from "../styles/quiz/HalfCircleProgressComponentStyle";
import ghostImg from "../assets/images/quiz_icon.png";

interface HalfCircleProgressProps {
  progress: number; // 0 ~ 100
}

const HalfCircleProgress: React.FC<HalfCircleProgressProps> = ({ progress }) => {
  const radius = 120;
  const circumference = Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <S.Wrapper>
      <S.ProgressSvg width="250" height="125">
        {/* 배경 반원 */}
        <path
          d="M10,125 A110,110 0 0,1 240,125"
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* 진행 반원 */}
        <path
          d="M10,125 A110,110 0 0,1 240,125"
          fill="transparent"
          stroke="#3A8EF6"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </S.ProgressSvg>

      {/* 유령 이미지 (밑에 위치) */}
      <S.GhostImage src={ghostImg} alt="Ghost" />
    </S.Wrapper>
  );
};

export default HalfCircleProgress;
