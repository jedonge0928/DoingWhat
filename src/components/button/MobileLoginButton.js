import styled from "styled-components";

const MobileButton = styled.button`
  display: none;

  @media ${({ theme }) => theme.device.ms} {
    display: block;
    border: none;
    width: 100%;
    padding: 10px 20px;
    background-color: #6ea2df;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export default function MobileLoginButton({ onClick }) {
  return <MobileButton onClick={onClick}>로그인/회원가입</MobileButton>;
}
