import React from "react";
import {
  EventItem,
  EventItemDate,
  EventItemList,
  EventItemTitle,
  EventPage,
  EventTitle,
  Progress,
  SignUpEventBox,
  SignUpEventImg,
  SignUpEventTextBox,
} from "./Event.styles";
import { eventList } from "../../contants/eventData";
import { Link } from "react-router-dom";

export default function Event() {
  return (
    <EventPage>
      <EventTitle>이벤트</EventTitle>
      <SignUpEventBox>
        <SignUpEventImg>
          <img
            src={process.env.PUBLIC_URL + "/img/sighUpEventImg.png"}
            alt="회원가입 이벤트"
          />
        </SignUpEventImg>
        <SignUpEventTextBox>
          <h2>두잉왓 회원가입 이벤트</h2>
          <p>2023-08-16</p>
        </SignUpEventTextBox>
      </SignUpEventBox>
      <EventItemList>
        {eventList.map((item) => (
          <EventItem key={item.id}>
            <Link to={`/event/${item.id}`}>
              <img
                src={process.env.PUBLIC_URL + item.img_url}
                alt={item.title}
              />
            </Link>
            <EventItemTitle>
              {item.progress === false && <Progress>모집완료</Progress>}
              <Link to={`/event/${item.id}`}>{item.title}</Link>
            </EventItemTitle>
            <EventItemDate>{item.date}</EventItemDate>
          </EventItem>
        ))}
      </EventItemList>
    </EventPage>
  );
}
