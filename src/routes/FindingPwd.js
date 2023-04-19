import "../components/Login.css";
import icon from "../components/freq.png";
import "../components/FindingPwd.css";
import { useState } from "react";

function FindingPwd() {
  const [inputEmailValue, setInputEmailValue] = useState("");

  const saveUserEmail = (event) => {
    return setInputEmailValue(event.target.value);
  };
  return (
    <div>
      <div className="style_MemberFormContainer" style={{ height: 424 }}>
        <div className="style_MemberFormWrapper">
          <div className="style_MemberForm">
            <img src={icon} alt="Frequentool 로고" width={250}></img>
            <div className="style_Title">비밀번호 찾기</div>
            <div className="style_ExplainMessage">
              비밀번호를 찾고자 하는 Frequentool 이메일 ID를 입력해주시면 해당 이메일 주소로 비밀번호 재설정 링크를 보내드립니다.
              <br />
              <br />
              <div className="style_WarningText">&nbsp; * 카카오톡 연동 계정의 경우 이메일이 발송되지 않습니다 *</div>
            </div>
            <input
              className="style_Input style_EmailInput"
              width={5}
              height={5}
              type={"email"}
              placeholder={"이메일"}
              autoComplete={"off"}
              spellCheck={"false"}
              value={inputEmailValue}
              onChange={saveUserEmail}
            ></input>
            <button
              className="style_SolidButton style_EmailSolidButton"
              style={{ width: "36", height: "5", fontSize: "1.6", fontWeight: "800" }}
            >
              이메일 보내기
            </button>
            <div className="style_LoginLinkBar">
              <a className="style_Link" href="/member/login">
                로그인으로 돌아가기
              </a>
            </div>
            <div className="style_CopyrightBar style_MemberFormCopyright">
              <div className="style_CopyrightText">Copyright 2023 .TUKOREA Team6 From Frequentool. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FindingPwd;
