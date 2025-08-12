import styled from "styled-components";

export const QnaTabPage = styled.div`
  max-width: 1902px;
  margin: 0 auto;
  text-align: center;
`;
export const QnaTitle = styled.div`
  border: 1px solid #6ea1df;
  background-color: #6ea1df;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.3rem;
  color: white;
  border-radius: 5px;
  margin-bottom: 60px;
`;

export const QnaCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  border: 1px solid #a4a4a4;
  text-align: left;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const QnaText = styled.p`
  font-size: 1.2rem;
  padding: 10px 0;
`;
export const QnaUser = styled.p`
  display: flex;
  gap: 50px;
  color: #a4a4a4;
`;

/*Review*/

export const ReviewPage = styled.div`
  padding: 10px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    margin-top: 70px;
  }
`;

export const NotReviews = styled.div`
  padding: 10px 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ReviewSelect = styled.select`
  padding: 10px 20px;
  display: flex;
  font-size: 1rem;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid #a4a4a4;
`;

export const ReviewImgDiv = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #a4a4a4;
  padding: 10px 20px;
  font-size: 1.3rem;
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
    font-size: 1rem;
    ailgn-items: center;
  }
`;

export const ReviewImg = styled.div`
  max-width: 100px;

  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
export const ReviewTextBox01 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    display: flex;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.ms} {
    justify-content: space-between;
  }
`;

export const ReviewTitle = styled.div`
  padding: 10px 20px;
  font-size: 1.3rem;
  color: black;
  border-radius: 5px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    font-size: 1.1rem;
  }
`;
export const ReviewUserBox = styled.div`
width:100%:
`;
export const ReviewUser = styled.div`
  padding: 10px 20px;
  font-size: 1.1rem;
  color: #aaaaaa;
  border-radius: 5px;

  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    font-size: 0.9rem;
  }
`;
export const ReviewDate = styled.div`
  padding: 10px 20px;
  display: flex;
  font-size: 1rem;
  color: #aaaaaa;
  border-radius: 5px;

  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    font-size: 0.9rem;
  }
`;

/*productinfo*/

export const ProductInfoImgDiv = styled.div`
  width: 100%;
`;
export const ProductInfoImg = styled.img`
  width: 100%;
`;
