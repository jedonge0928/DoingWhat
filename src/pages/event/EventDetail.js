import React from "react";
import { useParams } from "react-router-dom";
import {
  BackPageBtn,
  DetailEventImg,
  EventItemDate,
  EventPage,
  EventProgess,
  EventTitle,
  FirstType,
  SecondType,
  ThridType,
} from "./Event.styles";
import { eventList } from "../../contants/eventData";

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
