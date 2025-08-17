import { Container, Form } from "react-bootstrap";
import styled from "styled-components";

const LoginModalPage = styled.div`
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

const Login = styled.div`
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
const InputLogin = styled.div`
  margin: 10px 0;
`;
const SaveLogin = styled.div`
  margin: 10px 0;
`;

const LoginBtn = styled.button`
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

const SignUpBtn = styled.button`
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
const CloseBtn = styled.button`
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

export default function LoginModal({ onClose }) {
  return (
    <LoginModalPage onClick={onClose}>
      <Container>
        <Login onClick={(e) => e.stopPropagation()}>
          <Form class="dropdown-menu p-4">
            <InputLogin class="form-group">
              <label for="exampleDropdownFormEmail2">이메일</label>
              <input
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail2"
                placeholder="email@example.com"
              />
            </InputLogin>
            <InputLogin className="form-group">
              <label for="exampleDropdownFormPassword2">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword2"
                placeholder="Password"
              />
            </InputLogin>
            <div className="form-group">
              <SaveLogin className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck2"
                />
                <label className="form-check-label" for="dropdownCheck2">
                  로그인 저장
                </label>
              </SaveLogin>
            </div>
            <LoginBtn type="submit" className="btn btn-info">
              로그인
            </LoginBtn>
            <SignUpBtn type="submit" className="btn btn-secondary">
              회원가입
            </SignUpBtn>
          </Form>
          <CloseBtn onClick={onClose}>닫기</CloseBtn>
        </Login>
      </Container>
    </LoginModalPage>
  );
}
