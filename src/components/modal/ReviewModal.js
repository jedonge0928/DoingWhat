import {
  CloseButton,
  ModalContainer,
  ReviewImage,
  ReviewImageBox,
  ReviewModalPage,
  ReviewText,
  ReviewTitle,
  Star,
  StarNumber,
  TextBox,
  User,
  UserBox,
} from "./ReviewModal.styles";

import { IoMdClose } from "react-icons/io";

export default function ReviewModal({ isOpen, review, onClose }) {
  if (!isOpen || !review) return null;

  return (
    <ReviewModalPage onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ReviewImageBox>
          <ReviewImage
            src={process.env.PUBLIC_URL + review.reviewUrl}
            alt={review.userName}
          />
        </ReviewImageBox>
        <TextBox>
          <CloseButton onClick={onClose}>
            <IoMdClose />
          </CloseButton>
          <StarNumber>
            {[...Array(5)].map((_, i) => (
              <Star key={i} />
            ))}
          </StarNumber>

          <ReviewTitle>{review.reviewTitle}</ReviewTitle>
          <ReviewText>{review.reviewText}</ReviewText>
          <UserBox>
            <User>{review.userName}</User>
            <User>{review.userDate}</User>
          </UserBox>
        </TextBox>
      </ModalContainer>
    </ReviewModalPage>
  );
}
