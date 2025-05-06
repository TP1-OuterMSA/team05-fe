import { useState } from "react";
import * as S from "../../styles/modal/PhoneModal";
import { postPhoneNum } from "../../api/quiz";
import AlreadyQuizModal from "./AlreadyQuizModal";

interface Props {
  onClose: () => void;
}

export default function PhoneModal({ onClose }: Props) {
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [canSolve, setCanSolve] = useState<boolean>();

  const handleConfirm = () => {
    const isValid = /^[0-9]{11}$/.test(phone); // 11자리 숫자만
    if (isValid) {
      const formattedPhone = `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7)}`;
      localStorage.setItem("userPhone", formattedPhone);
      
      const fetchPhone = async (phoneNum: string) => {
        try {
          const response = await postPhoneNum(phoneNum);
          const canSolveNow = response.result.canEarnToday;
          setCanSolve(canSolveNow);
          localStorage.setItem("userPoint", response.result.point);
  
          if (canSolveNow) {
            onClose(); // 모달 닫기
          } else {
            setIsOpen(true); // 이미 푼 상태 모달 띄우기
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchPhone(formattedPhone);
    } else {
      setError("전화번호를 숫자 11자리로 정확히 입력해주세요.");
    }
  };
  

  return (
    <S.Backdrop>
      {isOpen&&<AlreadyQuizModal/>}
      <S.ModalBox>
        <S.Message>전화번호를 입력해주세요</S.Message>
        <S.PhoneInput
          type="tel"
          placeholder="예: 01012345678"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setError(""); // 입력하면 에러 초기화
          }}
        />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        <S.ConfirmButton onClick={handleConfirm}>확인</S.ConfirmButton>
      </S.ModalBox>
    </S.Backdrop>
  );
}