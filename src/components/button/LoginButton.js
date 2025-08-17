import styled from "styled-components";

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #6ea2df;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  @media ${({ theme }) => theme.device.ms} {
    display: none;
  }
`;

export default function LoginButton({ onClick }) {
  return <Button onClick={onClick}>로그인/회원가입</Button>;
}
