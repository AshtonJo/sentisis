import { REDIRECT_URI, REST_API_KEY } from "./KakaoLoginData";
import "../components/Login.css";
import "../components/NavBar.css";
import icon from "../components/freq.png";
import icon_kakao from "../components/kakao_login_large_wide.png";
import { useState } from "react";

function Login() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile_nickname,account_email,gender`;

  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPWDValue, setInputPWDValue] = useState("");
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const saveUserEmail = (event) => {
    return setInputEmailValue(event.target.value);
  };

  const saveUserPWD = (event) => {
    return setInputPWDValue(event.target.value);
  };
  return (
    <div>
      <div className="style_MemberFormContainer">
        <div className="style_MemberFormWrapper">
          <div className="style_MemberForm">
            <div className="style_Logo style_MemberLogo">
              <a className="style_Link" href="/">
                <img alt="sentisis 로고" src={icon} width="250"></img>
              </a>
            </div>
            <div className="style_Title">간편 로그인</div>
            <div>
              <div id="join-kakao" className="style_KakaoLoginButton">
                <img alt="icon_kakao 로고" src={icon_kakao} onClick={handleLogin}></img>
              </div>
            </div>
            <div className="style_LineText">
              <div className="style_Line"></div>
              <div className="style_Text">OR</div>
              <div className="style_Line"></div>
            </div>
            <div className="style_Title">이메일 로그인</div>
            <input
              className="style_Input style_LoginInput"
              placeholder="이메일 주소"
              spellCheck={"false"}
              type={"email"}
              value={inputEmailValue}
              onChange={saveUserEmail}
              width="36"
              height="5"
              autoComplete={"off"}
            ></input>
            <input
              className="style_Input style_LoginInput"
              placeholder="비밀번호"
              spellCheck={"false"}
              type={"password"}
              value={inputPWDValue}
              onChange={saveUserPWD}
              width="36"
              height="5"
              autoComplete={"off"}
            ></input>
            <div className="style_MiddleBar">
              <label>
                <a className="style_Link" href="/member/password-forgotten">
                  비밀번호 찾기
                </a>
              </label>
            </div>
            <button
              className="style_SolidButton style_LoginSolidButton"
              style={{ width: "36", height: "5", fontSize: "1.6", fontWeight: "800" }}
            >
              로그인
            </button>
            <div className="style_InvitationBar">
              <span className="style_InvitationText">Sentisis에 처음이세요?</span>
              <a className="style_Link" href="/member/join">
                회원가입하기
              </a>
            </div>
            <div className="style_CopyrightBar style_MemberFormCopyright">
              <div className="style_CopyrightText">Copyright 2023 .TUKOREA Team6 From Sentisis. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
