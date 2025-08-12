import {
  CartLink,
  CartModalPage,
  Modal,
  ModalBtn,
  ModalCart,
  ModalClose,
  ModalTitle,
  ShopBack,
} from "./CartModal.styles";
import { IoMdClose } from "react-icons/io";
export default function CartModal({ onClose }) {
  return (
    <CartModalPage>
      <ModalCart>
        <Modal>
          <ModalTitle>장바구니에 추가하였습니다.</ModalTitle>
          <ModalBtn>
            <CartLink to="/cart">장바구니</CartLink>
            <ShopBack onClick={onClose}>쇼핑 이어서하기</ShopBack>
          </ModalBtn>
        </Modal>

        <ModalClose onClick={onClose}>
          <IoMdClose />
        </ModalClose>
      </ModalCart>
    </CartModalPage>
  );
}
