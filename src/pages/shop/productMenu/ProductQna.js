import React from "react";
import { qnaList } from "../../../contants/qna";
import {
  QnaCard,
  QnaTabPage,
  QnaText,
  QnaTitle,
  QnaUser,
} from "./productQna.styles";
import { useParams } from "react-router-dom";

export default function ProductQna() {
  const { id } = useParams();
  const productQna = qnaList[id];
  return (
    <QnaTabPage>
      <QnaTitle>상품문의하기</QnaTitle>
      {productQna.map((qna) => (
        <QnaCard key={qna.id}>
          <QnaText>{qna.text}</QnaText>
          <QnaUser>
            <p>{qna.name}</p>
            <p>{qna.date}</p>
          </QnaUser>
        </QnaCard>
      ))}
    </QnaTabPage>
  );
}
