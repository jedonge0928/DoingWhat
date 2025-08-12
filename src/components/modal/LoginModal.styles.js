import styled from "styled-components";

export const LoginModalPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10001;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  max-width: 350px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
`;
export const InputLogin = styled.div`
  margin: 10px 0;
`;
export const SaveLogin = styled.div`
  margin: 10px 0;
`;

export const LoginBtn = styled.button`
  width: 100%;
  display: block;
  margin-bottom: 10px;
  color: white;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: #05f3fcff;
  }
`;

export const SignUpBtn = styled.button`
  width: 100%;
  display: block;
  margin-bottom: 10px;
  color: white;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: #494949ff;
  }
`;
export const CloseBtn = styled.button`
  width: 100%;
  display: block;
  background-color: red;
  border: 1px solid red;
  padding: 5px;
  border-radius: 5px;
  color: white;
  box-sizing: border-box;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: red;
  }
`;
