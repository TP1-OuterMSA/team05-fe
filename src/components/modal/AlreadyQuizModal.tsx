import * as S from "../../styles/modal/AlreadyQuizModalStyle";
import { useNavigate } from "react-router-dom";

export default function AlreadyQuizModal() {
  const navigate = useNavigate();

  return (
    <S.Backdrop>
      <S.ModalBox>
        <S.Message>오늘은 이미 퀴즈를 풀었네요🥲</S.Message>
        <S.Message2>내일 또 도전해주세요!</S.Message2>
        <S.ConfirmButton onClick={()=>navigate('/team5')}>확인</S.ConfirmButton>
      </S.ModalBox>
    </S.Backdrop>
  );
}