import "./Home.css";
import "./NavBar.css";
import React from "react";

function Home() {
  return (
    <React.Fragment>
      <main className="style_Home" id="elemet_style">
        <section className="style_HomeTopContainer">
          <div className="style_HomeTopInnerWrapper">
            <h1 className="style_HomeTitle style_HomeTitleFont">
              현 상황 분석을 위한
              <br /> SNS를 이용한 비트코인 분석 툴,
              <span className="style_Emphasis">
                <br />
                SENTISIS
              </span>
            </h1>
            <h2 className="style_HomeSubTitle">오늘의 예측과 금일 핵심 키워드 및 다양한 서비스 이용이 가능합니다. {":)"} </h2>
          </div>
        </section>
        <section className="style_HomeSectionConatiner">
          <div className="style_HomeSectionWrapper">
            <h1 className="style_HomeSectionTitle">메인 서비스 😎</h1>
            <h2 className="style_HomeSectionDescription style_Emphasis">여러분만을 위한 SENTISIS의 강력한 툴들을 만나보세요 !</h2>
            <div className="style_HomeSectionContent">
              <a className="style_Link style_ServiceLink" href="/service/today-expectaion">
                <div className="style_ServiceCard">
                  <h3 className="style_ServiceCardTitle">오늘의 예측</h3>
                  <p className="style_ServiceCardDescription">
                    오늘 비트코인의
                    <br />
                    상승 하락 여부를 체크해보세요.
                  </p>
                  <button className="style_ServiceCardShortcuts">바로가기</button>
                </div>
              </a>
              <a className="style_Link style_ServiceLink" href="/service/today-key-keyword">
                <div className="style_ServiceCard">
                  <h3 className="style_ServiceCardTitle">오늘 핵심 키워드</h3>
                  <p className="style_ServiceCardDescription">
                    금일 9시부터 익일 9시 사이,
                    <br />
                    핵심 키워드를 알아보세요.
                  </p>
                  <button className="style_ServiceCardShortcuts">바로가기</button>
                </div>
              </a>
              <a className="style_Link style_ServiceLink" href="/service/amount-of-writing">
                <div className="style_ServiceCard">
                  <h3 className="style_ServiceCardTitle">오늘 올라온 글 수</h3>
                  <p className="style_ServiceCardDescription">
                    금일 9시부터 익일 9시 사이,
                    <br />
                    오늘의 글은 얼마나 올라왔을까요?
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
