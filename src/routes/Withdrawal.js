import "../components/Login.css";
import icon from "../components/freq.png";
import "../components/Withdrawal.css";

function Withdrawal() {
  return (
    <div>
      <div className="style_MemberFormContainer" style={{ height: "424" }}>
        <div className="style_MemberFormWrapper">
          <div className="style_MemberForm">
            <img src={icon} alt="Frequentool 로고" width={250}></img>
            <div className="style_Title" style={{ textAlign: "center" }}>
              회원 탈퇴
            </div>
            <hr />
            <br />
            <div className="style_ExplainMessage">
              탈퇴시 사용자 계정 및 카카오 연동 계정 복구는 불가능합니다.
              <br />
              <br />
              <div className="style_WarningText">&nbsp; *소셜 계정 연결시 탈퇴한 경우 연결 정보도 함께 삭제됩니다 *</div>
              <br />
              <br />
              <br />
              <div className="style_ExplainMessage" style={{ fontSize: "30", textAlign: "center", color: "wheat" }}>
                <input className="style_Withdrawl_Checkbox" type={"checkbox"}></input>
                유의사항을 읽었으며 이에 동의합니다.
              </div>
            </div>
            <br />
            <button
              className="style_SolidButton style_EmailSolidButton"
              style={{ width: "36", height: "5", fontSize: "1.6", fontWeight: "800" }}
            >
              탈퇴하기
            </button>
            <div className="style_LoginLinkBar">
              <a className="style_Link" href="/my-account/info">
                마이페이지로 돌아가기
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
export default Withdrawal;
