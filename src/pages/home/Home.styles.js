import styled from "styled-components";

export const MainBanner = styled.video`
  display: block;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: 800px;
  object-fit: cover;

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
    max-height: 800px;
  }
  @media ${({ theme }) => theme.device.xs} {
    width: 100%;
    max-height: 300px;
  }
`;

export const MainHome = styled.div`
  width: 100%;
  text-align: center;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  &:hover {
    background-color: #6ea2df;
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const ButtonBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 2;
  opacity: 0;
  transition: all 0.5s;
  button,
  a {
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    background-color: #0d2e47;
    color: white;
  }

  button {
    background-color: rgba(121, 191, 255, 0.9);
    color: white;
  }
`;

export const SlideImgBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  opacity: 0;
`;

export const TextBox = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  font-size: 1.1rem;
  max-width: 1920px;
`;
export const MiniTextBox = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  max-width: 1920px;
  flex-direction: column;
  gap: 40px;

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
    max-height: 800px;
  }
  @media ${({ theme }) => theme.device.xs} {
    p {
      display: none;
    }

    p:nth-child(2) {
      display: block;
      padding: 0 50px;
      line-height: 40px;
    }
  }
`;
export const ButtonStyles = styled.button`
  border: 1px solid #6ea2df;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  color: #6ea2df;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  margin: 100px 0;

  &:hover {
    background-color: #6ea2df;
    color: white;
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
`;

export const SlideTrack = styled.div`
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  background-color: #f4ffff;
  box-shadow: 0 0 8px rgba(142, 210, 255, 1);
`;
export const Slide = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }

  &.active {
    cursor: grabbing;
  }
`;

export const SlideTitle = styled.h2`
  font-size: 1.2rem;
  color: ${(props) => props.color || "#0084ff"};
  padding: ${(props) => props.padding || "20px 0"};
`;
export const SlideItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemTitle = styled.p`
  flex: 1;
  font-size: 0.9rem;
  padding: 5px 10px;
  font-weight: bold;
  box-sizing: border-box;
`;
export const EngTitle = styled.p`
  color: #aaa;
  font-size: 0.8rem;
  padding: 5px 10px;
`;
export const SoldOut = styled.div`
  color: white;
  background-color: black;
  display: inline-block;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  margin: 5px 0;
`;

export const BeforePrice = styled.p`
  font-size: 0.9rem;
  color: #aaa;
`;
export const AfterPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;
export const TotalPrice = styled.div`
  position: relative;

  span {
    position: absolute;
    right: 30px;
    top: 0;
    color: #0084ff;
  }
`;

export const Review = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 10px;
`;
export const ReviewItem = styled.div`
  width: calc((100% - 20px) / 3);
  max-height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const YouTubeVideo = styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding-bottom: 45.25%;
  height: 0;
  margin-bottom: 100px;
`;
