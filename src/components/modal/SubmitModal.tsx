import React from "react";
import * as S from "../../styles/modal/SubmitModalStyle";

interface SubmitModalProps {
	onClose: () => void;
	onConfirm: () => void;
}

const SubmitModal: React.FC<SubmitModalProps> = ({ onClose, onConfirm }) => {
	return (
		<S.Backdrop>
			<S.ModalBox>
				<S.CloseButton onClick={onClose}>×</S.CloseButton>
				<S.Message>의견을 제출해주셔서 감사합니다.</S.Message>
				<S.ConfirmButton onClick={onConfirm}>홈으로 이동</S.ConfirmButton>
			</S.ModalBox>
		</S.Backdrop>
	);
};

export default SubmitModal;
