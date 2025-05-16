// AdminDeleteFoodList.tsx
import * as S from "../../styles/modal/AdminDeleteFoodListStyle";

interface AdminDeleteFoodListProps {
	onCancel: () => void;
	onConfirm: () => void;
}

export default function AdminDeleteFoodList({ onCancel, onConfirm }: AdminDeleteFoodListProps) {
	return (
		<S.Backdrop>
			<S.ModalBox>
				<S.CloseButton onClick={onCancel}>×</S.CloseButton>
				<S.Message>정말 카드를 삭제하시겠습니까?</S.Message>
				<S.ButtonRow>
					<S.CancelButton onClick={onCancel}>취소</S.CancelButton>
					<S.ConfirmButton onClick={onConfirm}>삭제</S.ConfirmButton>
				</S.ButtonRow>
			</S.ModalBox>
		</S.Backdrop>
	);
}
