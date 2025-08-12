import { Container, Form } from "react-bootstrap";
import {
  CloseBtn,
  InputLogin,
  Login,
  LoginBtn,
  LoginModalPage,
  SaveLogin,
  SignUpBtn,
} from "./LoginModal.styles";

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
