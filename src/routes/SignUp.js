import "../components/Login.css";
import "../components/FindingPwd.css";
import "../components/SignUp.css";
import icon from "../components/freq.png";
import { useState } from "react";

function SignUp() {
  const [nickname, setNickname] = useState("");
  const [inputemail, setInputEmailValue] = useState("");
  const [inputPWDValue, setInputPWDValue] = useState("");

  const saveUserNickname = (event) => {
    return setNickname(event.target.value);
  };
  const saveUserEmail = (event) => {
    return setInputEmailValue(event.target.value);
  };
  const saveUserPWD = (event) => {
    return setInputPWDValue(event.target.value);
  };
  return (
    <div>
      <div className="style_MemberFormContainer" style={{ height: "424" }}>
        <div className="style_MemberFormWrapper">
          <div className="style_MemberForm">
            <img src={icon} alt="Frequentool 로고" width={250}></img>
            <div className="style_Title">회원정보 입력</div>
            <input
              className="style_Input style_JoinInput"
              type={"text"}
              placeholder={"닉네임"}
              spellCheck={"false"}
              autoComplete={"off"}
              style={{ width: "36", height: "5" }}
              value={nickname}
              onChange={saveUserNickname}
            ></input>
            <input
              className="style_Input style_JoinInput"
              type={"eamil"}
              placeholder={"이메일"}
              spellCheck={"false"}
              autoComplete={"off"}
              style={{ width: "36", height: "5" }}
              value={inputemail}
              onChange={saveUserEmail}
            ></input>
            <input
              className="style_Input style_JoinInput"
              type={"password"}
              placeholder={"비밀번호"}
              spellCheck={"false"}
              autoComplete={"off"}
              style={{ width: "36", height: "5" }}
              value={inputPWDValue}
              onChange={saveUserPWD}
            ></input>

            <button
              className="style_SolidButton style_JoinSolidButton"
              style={{ width: "36", height: "5", fontSize: "1.6", fontWeight: "800" }}
            >
              가입하기
            </button>
            <div className="style_LoginLinkBar">
              <span className="style_LoginLinkText">이미 회원이라면?</span>
              <a className="style_Link" href="/member/login">
                로그인하기
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
export default SignUp;
