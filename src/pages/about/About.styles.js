import styled from "styled-components";

export const BackgroundImg01 = styled.div`
  margin: 60px auto;
  background-image: url("/img/about_img11.jpg");
  background-repeat: no-repeat;
  background-position: bottom 45% center;
  width: 100%;
  max-width: 1920px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  font-size: 1.5rem;
  color: white;
  line-height: 2.4rem;
`;

export const BackgroundText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;
export const TextBox01 = styled.div`
  margin: 50px 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BrandText = styled.h2`
  font-size: 2rem;
  text-align: center;
  line-height: 4.5rem;
  margin: ${(props) => props.margin || "0 0 100px"};
  color: ${(props) => props.color || "black"};
  span {
    color: #81c3fc;
  }

  @media ${({ theme }) => theme.device.ms} {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;

export const BrandMiniText = styled.p`
  max-width: 426px;
  font-size: 1rem;
  text-align: center;
  line-height: 2.5rem;
  color: #6b6b6b;
`;

/*background_img02 */
export const BackgroundImg02 = styled.div`
  margin: 60px auto;
  background-image: url("/img/about_img02.jpg");
  background-repeat: no-repeat;
  background-position: bottom 45% center;
  background-size: cover;
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  font-size: 1.2rem;
  color: white;
  line-height: 2rem;
  opacity: 1;

  @media ${({ theme }) => theme.device.ms} {
    display: none;
  }
`;
export const AboutVideo = styled.video`
  display: block;
  width: 100%;
  border-radius: 5px;
  max-width: 1200px;
  margin: 0 auto;
  height: 700px;
  object-fit: cover;

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
    object-fit: contain;
  }
`;

/*background_img03 */
export const Section03 = styled.div`
  min-height: 700px;
  img {
    display: block;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 100px;
  }
`;

export const Section03TextBox = styled.div`
  margin: 250px auto 200px;

  @media ${({ theme }) => theme.device.ms} {
    margin: 50px auto;
  }
`;
export const Section03Keyword = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
/*background_img04*/

export const BackgroundImg03 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 50px;

  img {
    width: 100%;
    max-width: 1200px;
    max-height: 700px;
    display: block;
    object-fit: cover;
    opacity: 0.1;
  }
  @media ${({ theme }) => theme.device.ms} {
    img {
      display: none;
    }
  }
`;

export const ExperienceBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 70px;
  font-size: 1.2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  p {
    font-size: 1rem;
    line-height: 2.2rem;
  }
  span {
    color: #1981e5;
    font-size: 1.6rem;
    font-weight: bold;
  }

  @media ${({ theme }) => theme.device.ms} {
    position: static;
    margin-top: 40px;
  }
  p {
    font-size: 0.8rem;
    line-height: 1.7rem;
  }
  span {
    color: #1981e5;
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
