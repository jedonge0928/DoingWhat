import styled from "styled-components";
import { Link } from "react-router-dom";
export const EventPage = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  padding: 10px;
  box-sizing: border-box;
  max-width: 1920px;
`;

export const EventTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  padding: 10px;
  text-align: center;
`;
export const EventProgess = styled.p`
  font-size: 1.7rem;
  padding: 10px 0;
  margin-bottom: 20px;
  background-color: #1a7ce7;
  color: white;
  border-radius: 5px;
  text-align: center;
`;

export const SignUpEventBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 50px;
`;
export const SignUpEventImg = styled.div`
  width: 200px;

  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
export const SignUpEventTextBox = styled.div`
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

export const EventItemList = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
`;

export const EventItem = styled.div`
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
`;

export const EventItemTitle = styled.div`
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
export const Progress = styled.span`
  display: block;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #1981e5;
  color: white;
`;
export const EventItemDate = styled.div`
  color: #b3b3b3;
  font-size: 1.3rem;
  text-align: center;
`;

/**--------------------------Event Detail Page--------------------- */
export const DetailEventImg = styled.div`
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
/**------------------first--------------------- */
export const FirstType = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 50px;
  margin: 20px 0;
  font-weight: bold;
  font-size: 1.3rem;
`;
export const BackPageBtn = styled(Link)`
  border: 1px solid #1981e5;
  background-color: #1981e5;
  color: white;
  padding: 20px 50px;
  margin: 0 auto;
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
/**------------------second--------------------- */
export const SecondType = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  line-height: 2.4rem;
  font-size: 1.2rem;
  gap: 20px;
  margin-bottom: 50px;
`;
/**------------------thrid--------------------- */
export const ThridType = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;
