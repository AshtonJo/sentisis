import Foot from "../components/Footer";
import NavBar from "../components/NavBar";
import "../components/MyPage.css";

function MyPage() {
  return (
    <div>
      <NavBar></NavBar>

      <div className="style_MyAccount">
        <div className="style_TabContainer">
          <div className="style_TabWrapper">
            {" "}
            <a
              className="style_NavLink active"
              href="/my-account/info"
              style={{ color: "rgb(81,169,243)", borderBottom: "0.2rem solid rgb(81,169,243)" }}
              aria-current="page"
            >
              회원 정보
            </a>
          </div>
        </div>
        <div className="style_TabContentContainer">
          <div className="style_TabContent">
            <div className="style_TabContentHead">회원 정보</div>
            <div className="style_TabContentBody">
              <div className="style_InfoRowContainer">
                <div className="stlye_InfoRow">
                  <div className="style_InfoTitle">이름</div>
                  <div className="style_InfoContent">Ashton</div>
                </div>
              </div>
              <div className="style_InfoRowContainer">
                <div className="stlye_InfoRow">
                  <div className="style_InfoTitle">이메일</div>
                  <div className="style_InfoContent">
                    <div>
                      hee576@nate.com<span className="style_KakaoBadge">카카오 연동 계정</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="style_InfoRowContainer">
                <div className="stlye_InfoRow">
                  <div className="style_InfoTitle">가입일</div>
                  <div className="style_InfoContent">
                    <div>2023년 02월 16일</div>
                  </div>
                </div>
              </div>

              <div className="style_InfoRowContainer">
                <div className="stlye_InfoRow">
                  <div className="style_InfoTitle">탈퇴하기</div>
                  <div className="style_InfoContent">
                    <a className="style_LeaveButton" href="/withdrawal">
                      계정 탈퇴하기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Foot></Foot>
    </div>
  );
}

export default MyPage;
