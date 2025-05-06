import { useState } from "react";
import * as S from "../../styles/modal/PhoneModal";
import { postPhoneNum } from "../../api/quiz";

interface Props {
  onClose: () => void;
}

export default function PhoneModal({ onClose }: Props) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = () => {
    const isValid = /^[0-9]{11}$/.test(phone); // 11자리 숫자만
    const fetchPhone = async(phoneNum: string) => {
        try{
            const response = await postPhoneNum(phoneNum);
            localStorage.setItem("userPoint",response.result.point);
            console.log(localStorage.getItem("userPoint"));
        }catch(error){
            throw error;
        }
    }

    if (isValid) {
        // 하이픈 추가: 01012345678 → 010-1234-5678
        const formattedPhone = `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7)}`;
        localStorage.setItem("userPhone", formattedPhone);
        fetchPhone(formattedPhone);
        onClose(); // 모달 닫기
    } else {
        setError("전화번호를 숫자 11자리로 정확히 입력해주세요.");
    }
  };

  return (
    <S.Backdrop>
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