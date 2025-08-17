import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

const ReviewModalPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  @media ${({ theme }) => theme.device.xs} {
    padding: 10px;
    box-sizing: border-box;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  gap: 20px;
  background: #fff;
  padding: 20px;
  width: 800px;
  max-height: 80%;
  overflow: auto;
  position: relative;
  border-radius: 10px;

  @media ${({ theme }) => theme.device.xs} {
    flex-direction: column;
  }
`;
export const ReviewImageBox = styled.div`
  width: 350px;
  height: 400px;

  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    margin-top: 30px;
  }
`;

export const ReviewImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const TextBox = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;
export const ReviewTitle = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 1.3rem;
`;

export const ReviewText = styled.p`
  text-align: left;
  font-size: 1.1rem;
`;
export const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const User = styled.p`
  text-align: left;
  font-size: 1.1rem;
  color: #a4a4a4;
`;

/*review별점*/
export const StarNumber = styled.div`
  display: flex;
  justify-content: start;
`;
export const Star = styled(FaStar)`
  text-align: left;
  font-size: 1.8rem;
  color: #ffc60aff;
`;

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
