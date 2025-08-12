import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { review } from "../../../data/reviewData";
import {
  NotReviews,
  ReviewDate,
  ReviewImg,
  ReviewImgDiv,
  ReviewPage,
  ReviewSelect,
  ReviewTextBox01,
  ReviewTitle,
  ReviewUser,
  ReviewUserBox,
} from "./productQna.styles";

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
