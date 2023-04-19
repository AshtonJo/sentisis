import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SellModalBtn from "./SellModal";
import BuyModalBtn from "./BuyModal";
import DatePick from "./DatePicker";
import EndPick from "./EndPicker";

const AnHome = () => {
  const handlerGeneralSubmit = (event) => {
    event.preventDefault();
  };
  const SendActiveTabToAnHome = (activeTab) => {
    if (activeTab.length === 10) {
      console.log("고저알");
    } else if (activeTab.length === 11) {
      console.log("NT");
    } else if (activeTab.length === 8) {
      console.log("공탐");
    }
  };
  const SendtermToAnHome = (termValue) => {
    console.log(termValue);
  };
  const SendminRateToAnHome = (minRateValue) => {
    console.log(minRateValue);
  };
  const handlerDetailSubmit = (event) => {
    event.preventDefault();
  };

  const handleFileSelect = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target.result; // CSV 파일에서 데이터를 처리
    };
    reader.readAsText(file);
  };
  return (
    <div className="style_AnContainer">
      <Tabs className="mb-3 justify" style={{ marginLeft: "15.65rem", marginTop: "10rem", fontSize: 25 }}>
        <Tab eventKey="일반" title="일반">
          <div className="style_AnTopContainer">
            <div style={{ width: "25rem", height: "27rem", border: "1px solid whitesmoke", float: "left" }}>
              <h2 id="매수h2">매수</h2>

              <form onSubmit={handlerGeneralSubmit}>
                <div>
                  <h3 id="시작일h3">
                    시작일 <DatePick></DatePick>
                  </h3>
                </div>
                <div>
                  <h3 id="마지막일h3">
                    마지막일 <EndPick></EndPick>
                  </h3>
                </div>

                <h3 id="기준봉h3">
                  기준봉
                  <div>
                    <input placeholder="일봉" disabled></input>
                  </div>
                </h3>
              </form>
            </div>
            <div style={{ width: "28rem", height: "27rem", border: "1px solid whitesmoke", float: "left" }}>
              <h2 id="매도h2">매도</h2>
              <form onSubmit={handlerGeneralSubmit}>
                <div>
                  <h3 id="시작일h3">
                    시작일 <DatePick></DatePick>
                  </h3>
                </div>
                <div>
                  <h3 id="마지막일h3">
                    마지막일 <EndPick></EndPick>
                  </h3>
                </div>

                <h3 id="기준봉h3">
                  기준봉
                  <div>
                    <input placeholder="일봉" disabled></input>
                  </div>
                </h3>

                <Button onClick={handlerGeneralSubmit} type="submit" variant="primary" style={{ marginTop: "30px", marginLeft: "22rem" }}>
                  분석하기
                </Button>
              </form>
            </div>
          </div>
        </Tab>

        <Tab eventKey="상세" title="상세">
          <div className="style_AnTopContainer2">
            <div style={{ width: "400px", height: "1100px", border: "1px solid whitesmoke", float: "left" }}>
              <h2 id="매수h2">매수</h2>

              <form onSubmit={handlerDetailSubmit}>
                <div>
                  <h3 id="시작일h3">
                    시작일 <DatePick></DatePick>
                  </h3>
                </div>
                <div>
                  <h3 id="마지막일h3">
                    마지막일 <EndPick></EndPick>
                  </h3>
                </div>

                <h3 id="기준봉h3">
                  기준봉
                  <div>
                    <input placeholder="일봉" disabled></input>
                  </div>
                </h3>
                <h3 id="조건h3" className="style_BuyConditionalContainer">
                  <BuyModalBtn
                    SendActiveTabToAnHome={SendActiveTabToAnHome}
                    SendtermToAnHome={SendtermToAnHome}
                    SendminRateToAnHome={SendminRateToAnHome}
                  />
                  <div className="style_BuyConditionalBox">
                    {Array.from({ length: 12 }, (_, i, activeTab) => (
                      <input
                        style={{ fontSize: "15px", textAlign: "center" }}
                        key={i}
                        disabled={i === 8 || i >= 10}
                        placeholder={i === 8 ? "and" : undefined || i === 9 ? "고저알" : ""}
                      />
                    ))}
                  </div>
                </h3>
                <h3 id="CSVh3">
                  CSV
                  <input type="file" onChange={(event) => handleFileSelect(event.target.files[0])} style={{ fontSize: "1rem" }}></input>
                </h3>
              </form>
            </div>
            <div style={{ width: "28rem", height: "1100px", border: "1px solid whitesmoke", float: "left" }}>
              <h2 id="매도h2">매도</h2>
              <form onSubmit={handlerDetailSubmit}>
                <div>
                  <h3 id="시작일h3">
                    시작일 <DatePick></DatePick>
                  </h3>
                </div>
                <div>
                  <h3 id="마지막일h3">
                    마지막일 <EndPick></EndPick>
                  </h3>
                </div>

                <h3 id="기준봉h3">
                  기준봉
                  <div>
                    <input placeholder="일봉" disabled></input>
                  </div>
                </h3>

                <h3 id="조건h3" className="style_SellConditionalContainer">
                  <SellModalBtn />
                  <div className="style_SellConditionalBox">
                    {Array.from({ length: 12 }, (_, i) => (
                      <input key={i} disabled={i === 8 || i >= 10} placeholder={i === 8 ? "and" : undefined} />
                    ))}
                  </div>
                </h3>
                <Button onClick={handlerDetailSubmit} type="submit" variant="primary" style={{ marginTop: "55px", marginLeft: "19rem" }}>
                  분석하기
                </Button>
              </form>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AnHome;
