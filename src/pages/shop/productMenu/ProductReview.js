import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { review } from "../../../data/reviewData";
import styled from "styled-components";

const ReviewPage = styled.div`
  padding: 10px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    margin-top: 70px;
  }
`;

const NotReviews = styled.div`
  padding: 10px 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewSelect = styled.select`
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid #a4a4a4;
`;

const ReviewImgDiv = styled.div`
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
    align-items: center;
  }
`;

const ReviewImg = styled.div`
  max-width: 100px;

  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const ReviewTextBox01 = styled.div`
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

const ReviewTitle = styled.div`
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

const ReviewUserBox = styled.div`
  width: 100%;
`;

const ReviewUser = styled.div`
  padding: 10px 20px;
  font-size: 1.1rem;
  color: #aaaaaa;
  border-radius: 5px;

  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const ReviewDate = styled.div`
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

function showTime(time) {
  return new Date(time).getTime() || 0;
}
export default function ProductReview() {
  const { id } = useParams();
  const [sortType, setSortType] = useState("new");

  const filterSort = useMemo(() => {
    const filterReviews = review.filter(
      (item) => item.productId === Number(id)
    );
    const sortReviews = [...filterReviews].sort((a, b) => {
      if (sortType === "new")
        return showTime(b.userDate) - showTime(a.userDate);
      if (sortType === "old")
        return showTime(a.userDate) - showTime(b.userDate);

      return 0;
    });
    return sortReviews;
  }, [id, sortType]);

  if (filterSort.length === 0)
    return <NotReviews>등록된 리뷰가 없습니다.</NotReviews>;

  return (
    <ReviewPage>
      <div>
        <ReviewSelect
          value={sortType}
          onChange={(e) => {
            setSortType(e.target.value);
          }}
        >
          <option value="new">최신순</option>
          <option value="old">오래된순</option>
        </ReviewSelect>
      </div>

      {filterSort.map((item) => (
        <ReviewImgDiv key={item.id}>
          <ReviewImg>
            {item.reviewUrl && (
              <img src={item.reviewUrl} alt={item.reviewTitle} />
            )}{" "}
          </ReviewImg>
          <ReviewTextBox01>
            <ReviewTitle>{item.reviewTitle}</ReviewTitle>
            <ReviewUserBox>
              <ReviewUser>{item.userName}</ReviewUser>
              <ReviewDate>{item.userDate}</ReviewDate>
            </ReviewUserBox>
          </ReviewTextBox01>
        </ReviewImgDiv>
      ))}
    </ReviewPage>
  );
}
