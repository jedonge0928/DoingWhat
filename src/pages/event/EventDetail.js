import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { eventList } from "../../contants/eventData";

const EventPage = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  padding: 10px;
  box-sizing: border-box;
  max-width: 1920px;
`;

const EventTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  padding: 10px;
  text-align: center;
`;

const EventProgess = styled.p`
  font-size: 1.7rem;
  padding: 10px 0;
  margin-bottom: 20px;
  background-color: #1a7ce7;
  color: white;
  border-radius: 5px;
  text-align: center;
`;

const EventItemDate = styled.div`
  color: #b3b3b3;
  font-size: 1.3rem;
  text-align: center;
`;

const DetailEventImg = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const FirstType = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 50px;
  margin: 20px 0;
  font-weight: bold;
  font-size: 1.3rem;
`;

const SecondType = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  line-height: 2.4rem;
  font-size: 1.2rem;
  gap: 20px;
  margin-bottom: 50px;
`;

const ThridType = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;

const BackPageBtn = styled(Link)`
  border: 1px solid #1981e5;
  background-color: #1981e5;
  color: white;
  padding: 20px 50px;
  display: block;
  width: fit-content;
  margin: 100px auto;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: #1981e5;
  }
`;

export default function EventDetail() {
  const { id } = useParams();
  const event = eventList.find((item) => item.id === Number(id));

  if (!event) return <p>존재하지 않는 이벤트입니다.</p>;

  /**첫번째 이벤트 text */
  const [title, text, qna] = event.detailTexts ?? [];

  return (
    <EventPage>
      {event.progress === false && <EventProgess>모집완료</EventProgess>}
      <EventTitle>{event.detail_title}</EventTitle>
      <EventItemDate>{event.date}</EventItemDate>
      <DetailEventImg>
        <img src={process.env.PUBLIC_URL + event.img_url} alt={event.title} />
      </DetailEventImg>
      {event.type === "boys" && (
        <FirstType>
          <p>{title?.title}</p>
          <p>{text?.text}</p>
          <p>{qna?.qna}</p>
        </FirstType>
      )}
      {event.type === "review" &&
        event.detailTexts?.map((second, index) => (
          <SecondType key={index}>
            <h3>{second.title}</h3>
            <ul>
              {second.texts.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </SecondType>
        ))}
      {event.type === "soft" && <ThridType>{event.text01}</ThridType>}
      <BackPageBtn to="/event">목록</BackPageBtn>{" "}
    </EventPage>
  );
}
