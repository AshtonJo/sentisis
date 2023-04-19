import "./Home.css";
import "./NavBar.css";
import React from "react";

function Home() {
  return (
    <React.Fragment>
      <main className="style_Home" id="elemet_style">
        <section className="style_HomeTopContainer">
          <div className="style_HomeTopInnerWrapper">
            <h3 className="style_HomeTitle style_HomeTitleFont">
              SNS를 이용한 비트코인 현 상황 분석 툴,
              <span className="style_Emphasis">
                <br />
                <h1>Frequentool</h1>
              </span>
            </h3>
            <h2 className="style_HomeSubTitle">사용자 설정 코인시장 동향예측 서비스{":)"} </h2>
          </div>
        </section>
        <section className="style_HomeSectionConatiner">
          <div className="style_HomeSectionWrapper">
            <h1 className="style_HomeSectionTitle">메인 서비스 😎</h1>
            <h2 className="style_HomeSectionDescription style_Emphasis">Frequentool 만의기능들을 만나보세요 !</h2>
            <div className="style_HomeSectionContent">
              <a className="style_Link style_ServiceLink" href="/service/analysis">
                <div className="style_ServiceCard">
                  <h3 className="style_ServiceCardTitle">분석하기</h3>
                  <p className="style_ServiceCardDescription">
                    사용자가 일반/상세 옵션을 선택하여
                    <br />
                    파라미터 선택 기반 분석이 가능합니다.
                  </p>
                  <button className="style_ServiceCardShortcuts">바로가기</button>
                </div>
              </a>

              <a className="style_Link style_ServiceLink" href="/service/allresult">
                <div className="style_ServiceCard">
                  <h3 className="style_ServiceCardTitle">분석결과모음</h3>
                  <p className="style_ServiceCardDescription">
                    사용자가 만든 파일의
                    <br />
                    결과를 볼 수 있는 페이지 입니다.
                  </p>
                  <button className="style_ServiceCardShortcuts">바로가기</button>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
