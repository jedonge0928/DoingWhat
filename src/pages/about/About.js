import styled, { css } from "styled-components";

const flexCenterCol = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const container = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const containerWide = css`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const textCenter = css`
  text-align: center;
`;

const bgNoRepeatPos = (url, pos = "center center") => css`
  background-image: url(${url});
  background-repeat: no-repeat;
  background-position: ${pos};
`;

const BackgroundImg01 = styled.div`
  ${flexCenterCol};
  ${containerWide};
  margin: 60px auto;
  min-height: 700px;
  gap: 30px;
  font-size: 1.5rem;
  color: white;
  line-height: 2.4rem;
  ${bgNoRepeatPos(
    `${process.env.PUBLIC_URL}/img/about_img11.jpg`,
    "bottom 45% center"
  )};
  background-size: cover;
`;

const BackgroundText = styled.div`
  ${flexCenterCol};
  font-size: 0.8rem;
`;

const TextBox01 = styled.div`
  ${flexCenterCol};
  margin: 50px 0 150px;
`;

const BrandText = styled.h2`
  ${textCenter};
  font-size: 2rem;
  line-height: 4.5rem;
  margin: ${({ margin }) => margin || "0 0 100px"};
  color: ${({ color }) => color || "black"};

  span {
    color: #81c3fc;
  }

  @media ${({ theme }) => theme.device.ms} {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;

const BrandMiniText = styled.p`
  ${textCenter};
  ${container};
  max-width: 426px;
  font-size: 1rem;
  line-height: 2.5rem;
  color: #6b6b6b;
`;

const BackgroundImg02 = styled.div`
  ${flexCenterCol};
  margin: 60px auto;
  ${bgNoRepeatPos(
    `${process.env.PUBLIC_URL}/img/about_img02.jpg`,
    "bottom 45% center"
  )};
  background-size: cover;
  width: 100%;
  min-height: 1000px;
  gap: 30px;
  font-size: 1.2rem;
  color: white;
  line-height: 2rem;
  opacity: 1;

  @media ${({ theme }) => theme.device.ms} {
    display: none;
  }
`;

const AboutVideo = styled.video`
  display: block;
  ${container};
  max-width: 1200px;
  height: 700px;
  margin: 0 auto;
  border-radius: 5px;
  object-fit: cover;

  @media ${({ theme }) => theme.device.ms} {
    object-fit: contain;
  }
`;

const Section03 = styled.div`
  min-height: 700px;

  img {
    display: block;
    ${container};
    max-width: 1200px;
    margin: 0 auto 100px;
    width: 100%;
  }
`;

const Section3TextBox = styled.div`
  margin: 250px auto 200px;

  @media ${({ theme }) => theme.device.ms} {
    margin: 50px auto;
  }
`;

const Section03Keyword = styled.div`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackgroundImg03 = styled.div`
  ${flexCenterCol};
  position: relative;
  margin-bottom: 50px;

  img {
    width: 100%;
    max-width: 1200px;
    max-height: 700px;
    display: block;
    object-fit: cover;
    opacity: 0.1;

    @media ${({ theme }) => theme.device.ms} {
      display: none;
    }
  }
`;

const ExperienceBox = styled.div`
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

    @media ${({ theme }) => theme.device.ms} {
      font-size: 0.8rem;
      line-height: 1.7rem;
    }
  }

  span {
    color: #1981e5;
    font-size: 1.6rem;
    font-weight: bold;

    @media ${({ theme }) => theme.device.ms} {
      font-size: 1.3rem;
    }
  }

  @media ${({ theme }) => theme.device.ms} {
    position: static;
    margin-top: 40px;
  }
`;

export default function About() {
  return (
    <div>
      <BackgroundImg01>
        <p>
          당신의 숨어있는 <br /> 매력이 깨어날 시간
        </p>
        <p>
          관리하는 남자들의 <br /> 자신있는 선택
        </p>
        <BackgroundText>
          <span>DOING WHAT?</span>
          <span>TIMING FOR GROOMING</span>
        </BackgroundText>
      </BackgroundImg01>

      <TextBox01>
        <BrandText>
          <span>두잉왓</span>은 현대 <span>남성</span>들이 가지고 있는{" "}
          <span>나다움</span>의 고민을
          <br /> 해결하기 위해 만들어진 <br />{" "}
          <span>맨즈 웰니스 그루밍 바이블 브랜드</span>입니다.
        </BrandText>
        <BrandMiniText>
          두잉왓은 단순히 외면을 위한 스타일링을
          <br />
          제안하는데서 그치지 않고,
          <br />
          남성들의 변화된 라이프스타일을 반영해
          <br />
          스스로를 사랑하는 방식으로서의 멋을 추구합니다.
          <br />
          자신을 들여다보고 사랑할 줄 아는 현대판 아도니스,
          <br />
          남자들에게 건강한 아름다움을 만끽할 수 있는
          <br />
          세련된 취향과 명쾌한 멋부림의 즐거움을 선사합니다.
        </BrandMiniText>
      </TextBox01>

      <BackgroundImg02>
        <AboutVideo muted autoPlay loop>
          <source
            src={process.env.PUBLIC_URL + "/video/mainBanner.mp4"}
            type="video/mp4"
          />
        </AboutVideo>
      </BackgroundImg02>

      <BrandText>DOING WHAT'S VALUE</BrandText>
      <TextBox01>
        <BrandMiniText>
          남자의 모든 다양한 아름다움과
          <br />
          남들과는 다른 이색적인 개성을 존중하며, 열린 사고로 고객, 그리고
          세상과 소통하기 위해 경험을 만들어주고 사회적 메세지를 전달하는
          캠페인을 도모하고자 합니다.
        </BrandMiniText>
      </TextBox01>

      <Section03>
        <img src={process.env.PUBLIC_URL + "/img/about_img03.jpg"} alt="" />
        <Section3TextBox>
          <BrandText>BRAND'S KEYWORD</BrandText>
          <BrandText color="#81c3fc" margin="0 0 50px">
            호기심이 관심으로, 도전이 자신감으로
          </BrandText>
          <Section03Keyword>
            <BrandText>#1 Curiosity [호기심]</BrandText>
            <BrandText>#2 Challenge [도전]</BrandText>
            <BrandText>#3 Confidence [자신감]</BrandText>
          </Section03Keyword>
        </Section3TextBox>
      </Section03>

      <BrandText margin="60px 0 0">BRAND EXPERIENCE</BrandText>
      <BackgroundImg03>
        <img src={process.env.PUBLIC_URL + "/img/about_img05.jpg"} alt="" />
        <ExperienceBox>
          <div>
            <h2>PHASE 1</h2>
            <p>
              <span>관리를 하고 싶은 나.</span> 어떤 것부터 해야할지 모르겠는데
              두잉왓의 메이크업 제품을 만났다.
              <br />
              나의 드라마틱한 변화를 위해 메이크업 제품을 사용해본다.
            </p>
          </div>
          <div>
            <h2>PHASE 2</h2>
            <p>
              이제 <span>내 얼굴에는 변화</span>가 생긴것 같은데
              <br />
              어딘가 아직 부족하다.
              <br />
              생각해보니 머리도 첫인상에서 중요한 부분을 차지한다고 하는데
              두잉왓 제품을 사용해서 그 다음엔 머리를 바꿔보고 싶다
            </p>
          </div>
          <div>
            <h2>PHASE 3</h2>
            <p>
              꾸미다 보니 가장 기초적인 것을 잊어버리고 트러블이 나기 시작했다.
              <br />
              두잉왓의 기초제품과 함께 <span>내 피부를 관리</span>하는 것도
              중요해졌다.
            </p>
          </div>
        </ExperienceBox>
      </BackgroundImg03>

      <BrandText>
        이 모든 과정에서 두잉왓은 고객에게 최상의 제품을 선보이기 위해
        노력합니다.
      </BrandText>
    </div>
  );
}
