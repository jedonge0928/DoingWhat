import React from "react";
import {
  FooterBg,
  FooterBox,
  FooterCopy,
  FooterGnb,
  FooterText,
  LogoImg,
} from "./Footer.styles";
import { Link } from "react-router-dom";
import { footerData } from "./footerData";

export default function Footer() {
  return (
    <FooterBg>
      <FooterBox>
        <Link to="/">
          <LogoImg
            src={process.env.PUBLIC_URL + "/img/doingWhatLogo.png"}
            alt="dowing-what-logo"
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
