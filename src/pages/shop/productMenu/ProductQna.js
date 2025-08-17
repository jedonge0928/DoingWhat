import { useParams } from "react-router-dom";
import styled from "styled-components";
import { qnaList } from "../../../contants/qna";

const QnaTabPage = styled.div`
  max-width: 1902px;
  margin: 0 auto;
  text-align: center;
`;

const QnaTitle = styled.div`
  border: 1px solid #6ea1df;
  background-color: #6ea1df;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.3rem;
  color: white;
  border-radius: 5px;
  margin-bottom: 60px;
`;

const QnaCard = styled.div`
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

const QnaText = styled.p`
  font-size: 1.2rem;
  padding: 10px 0;
`;

const QnaUser = styled.p`
  display: flex;
  gap: 50px;
  color: #a4a4a4;
`;

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
