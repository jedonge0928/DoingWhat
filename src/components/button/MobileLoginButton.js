import { MobileButtonStyle } from "../layout/header/Header.styles";

export default function MobileLoginButton({ onClick }) {
  return (
    <MobileButtonStyle onClick={onClick}>로그인/회원가입</MobileButtonStyle>
  );
}
