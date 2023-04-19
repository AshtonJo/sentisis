import "./Footer.css";
import React from "react";
import "./Home.css";
import "./NavBar";

function Foot() {
  return (
    <React.Fragment>
      <footer className="style_Footer">
        <div className="style_IslandContainer">
          <div className="style_FooterListContainer">
            <ul className="style_FooterList">
              <li className="style_FooterListTitle">Service</li>
              <li className="style_FooterItem">
                <a className="style_Link style_FooterLink" href="/service/analysis">
                  분석하기
                </a>
              </li>
              <li className="style_FooterItem">
                <a className="style_Link style_FooterLink" href="/service/allresult">
                  분석결과모음
                </a>
              </li>
            </ul>
            <ul className="style_FooterList">
              <li className="style_FooterListTitle">Git</li>
              <li className="style_FooterItem">
                <a className="style_Link style_FooterLink" href="https://github.com/AshtonJo">
                  조욱희
                </a>
              </li>
              <li className="style_FooterItem">
                <a className="style_Link style_FooterLink" href="https://github.com/EUNJH">
                  은종혁
                </a>
              </li>
              <li className="style_FooterItem">
                <a className="style_Link style_FooterLink" href="https://github.com/jungkwon1">
                  이정권
                </a>
              </li>
              <li className="style_FooterItem">
                <a className="style_Link style_FooterLink" href="https://github.com/SangWoon123">
                  김상운
                </a>
              </li>
            </ul>
            <ul className="style_FooterList">
              <li className="style_FooterListTitle">Support</li>
              <li className="style_FooterItem">조욱희</li>
              <li className="style_FooterItem">2017150049@tukorea.ac.kr</li>
              <li className="style_FooterItem">01082116458</li>
            </ul>
            <ul className="style_FooterList">
              <li className="style_FooterListTitle">Resource</li>
              <li className="style_FooterItem">v-0.1</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="style_IslandContainer" style={{ backgroundColor: "#2039b9" }}>
        <div className="style_FooterBottomContainer">
          <div className="style_FooterBottomWrap" style={{ color: "white" }}>
            SENTISIS | 2017150049@tukorea.ac.kr | 010-8211-6458 <br />
            한국공학대학교 6팀 졸업작품 UI 입니다. <br />
            Copyright 2023 .TUKOREA Team6 From Frequentool. All Rights Reserved.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Foot;
