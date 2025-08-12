import { ButtonStyle } from "../layout/header/Header.styles";

export default function LoginButton({ onClick }) {
  return <ButtonStyle onClick={onClick}>로그인/회원가입</ButtonStyle>;
}
