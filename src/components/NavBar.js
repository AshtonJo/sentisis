import "./NavBar.css";
import icon from "./freq.png";
import React from "react";

function NavBar() {
  return (
    <React.Fragment>
      <header className="style_GlobalNavigationBar">
        <nav className="style_navigation">
          <div className="style_LogoWrapper">
            <div className="style_Logo">
              <a className="style_Link" href="/">
                <img src={icon} alt="Frequentool 로고" width="16" className="style_CombinedLogo" />
              </a>
            </div>
          </div>
          <ul className="style_NavigationList">
            <li className="style_NavigationItem">
              <a className="style_Link style_NavigationLink style_NavBarFont" href="/service/analysis">
                분석하기
              </a>
            </li>
            <li className="style_NavigationItem">
              <a className="style_Link style_NavigationLink style_NavBarFont" href="/service/allresult">
                분석결과모음
              </a>
            </li>
          </ul>
          <div className="style_Spacer"></div>
          <ul className="style_NavigationList">
            <div className="style_DropdownParent">
              <span className="style_ToggleButtonWrapper">
                <li className="style_NavigationItem style_NavBarFont">{"USER"}</li>
              </span>
            </div>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default NavBar;
