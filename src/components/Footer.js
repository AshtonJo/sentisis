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
                <a className="style_Link style_FooterLink" href="/service/today-expectaion">
                  오늘의 예측
                </a>
              </li>
              <li className="style_FooterItem">
                <a className="style_Link style_FooterLink" href="/service/today-key-keyword">
                  오늘 핵심 키워드
                </a>
              </li>
              <li className="style_FooterItem">
                <a className="style_Link style_FooterLink" href="/service/amount-of-writing">
                  오늘 올라온 글 수
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
              <li className="style_FooterItem">v-0.0</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="style_IslandContainer">
        <div className="style_FooterBottomContainer">
          <div className="style_FooterBottomWrap">Sentisis &nbsp;|&nbsp; TUKOREA 6팀</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Foot;
