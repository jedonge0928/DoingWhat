import styled from "styled-components";
import { Link } from "react-router-dom";
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

const SignUpEventBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  margin-bottom: 50px;
`;

const SignUpEventImg = styled.div`
  width: 200px;

  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const SignUpEventTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  h2 {
    font-size: 1.7rem;
  }
  p {
    font-size: 1.4rem;
    color: #b3b3b3;
  }
`;

const EventItemList = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;

  @media ${({ theme }) => theme.device.xs} {
    flex-direction: column;
    gap: 30px;
  }
`;

const EventItem = styled.div`
  width: calc((100% - 20px) / 3);
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    flex-direction: column;
  }
`;

const EventItemTitle = styled.div`
  display: flex;
  gap: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;

  p {
    cursor: pointer;
  }
`;

const Progress = styled.span`
  display: block;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #1981e5;
  color: white;
`;

const EventItemDate = styled.div`
  color: #b3b3b3;
  font-size: 1.3rem;
  text-align: center;
`;

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
