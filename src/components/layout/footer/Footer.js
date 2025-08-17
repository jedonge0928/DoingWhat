import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { footerData } from "./footerData";

/* 공통*/
const fullWidth = css`
  width: 100%;
`;

const container1920 = css`
  ${fullWidth};
  max-width: 1920px;
`;

const flexRowBase = css`
  display: flex;
  gap: 20px;
  padding: 5px;
  font-size: 0.9rem;
`;

/*  스타일 */
const FooterBg = styled.div`
  ${fullWidth};
  border-top: 1px solid #c9c9c9;
`;

const FooterBox = styled.div`
  ${container1920};
`;

const LogoImg = styled.img`
  width: 100px;
  margin-top: 20px;
`;

const FooterGnb = styled.nav`
  ${flexRowBase};
  margin-top: 10px;
  cursor: pointer;

  @media ${({ theme }) => theme.device.xs} {
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const FooterText = styled.div`
  ${flexRowBase};

  @media ${({ theme }) => theme.device.ms} {
    flex-wrap: wrap;
    ${fullWidth};
    padding: 10px;
    box-sizing: border-box;
  }

  @media ${({ theme }) => theme.device.xs} {
    justify-content: center;
    gap: 40px;

    p:nth-child(4),
    p:nth-child(5),
    p:nth-child(6),
    p:nth-child(7) {
      display: none;
    }
  }
`;

const FooterCopy = styled.div`
  color: #c9c9c9;
  margin: 10px 0;
  font-size: 0.9rem;

  @media ${({ theme }) => theme.device.xs} {
    text-align: center;
  }
`;
export default function Footer() {
  return (
    <FooterBg>
      <FooterBox>
        <Link to="/">
          <LogoImg
            src={process.env.PUBLIC_URL + "/img/doingWhatLogo.png"}
            alt="doing-what-logo"
          />
        </Link>

        <FooterGnb>
          {footerData[0].gnb.map((item) => (
            <p key={item.id}>{item.gnbName}</p>
          ))}
        </FooterGnb>

        <FooterText>
          {footerData[0].text.map((item) => (
            <p key={item.id}>{item.textName}</p>
          ))}
        </FooterText>

        <FooterCopy>© 두잉왓. All Rights Reserved.</FooterCopy>
      </FooterBox>
    </FooterBg>
  );
}
