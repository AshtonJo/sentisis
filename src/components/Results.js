import React from "react";
import { useState } from "react";
import "../components/Results.css";
import BarChart from "./BarChart";
import { UserData } from "./Data";
import BuyPaging from "./BuyPaging";
import SellPaging from "./SellPaging";

function Results() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div className="style_Result">
      <div className="style_PageContainer">
        <div className="style_HeadContainer">
          <h1 className="style_FreqTitle">현재와 과거 고빈도 키워드 비교</h1>
          <h2 className="style_FreqDiscription">
            현재 시점의 단어들과 겹치는
            <br />
            매수/매도쪽에 가까운단어를 보여줍니다.
          </h2>
        </div>

        <div className="style_BodyContainer">
          <div className="style_ContainerFrame">
            <div className="style_CurrentBuyContainer">
              <BuyPaging></BuyPaging>
            </div>
            <div className="style_SBChartContainer"></div>
            <div className="style_CurrentSellContainer">
              <SellPaging></SellPaging>
            </div>
          </div>
        </div>

        <div className="style_HeadContainer">
          <h1 className="style_FreqTitle">매수 / 매도</h1>
          <h2 className="style_FreqDiscription">
            선정된 K개의 매수/매도 단어의
            <br />
            빈도차이를 워드클라우드로 보여줍니다.
          </h2>
        </div>

        <div className="style_BodyContainer">
          <div className="style_ContainerFrame">
            <div className="style_BuyWordCloud"></div>
            <div className="style_SellWordCloud"></div>
          </div>
        </div>

        <div className="style_HeadContainer">
          <h1 className="style_FreqTitle">내가 설정한 조건과 부합하는 날짜</h1>
          <h2 className="style_FreqDiscription">
            사용자가 설정한 기간에서 나온
            <br />
            단어의 조건과 부합하는 날짜를 보여줍니다.
          </h2>
        </div>

        <div className="style_BodyContainer">
          <div className="style_ContainerFrame">
            <div className="style_MatchingDay">
              <BarChart ChartData={userData}></BarChart>
            </div>
          </div>
        </div>

        <div className="style_HeadContainer">
          <h1 className="style_FreqTitle">매수/매도 날짜 단어</h1>
          <h2 className="style_FreqDiscription">
            사용자가 설정한 기간에서 나온
            <br />
            매수/매도 날짜 단어를 보여줍니다.
          </h2>
        </div>

        <div className="style_BodyContainer">
          <div className="style_ContainerFrame">
            <div className="style_BuyWord"></div>
            <div className="style_SellWord"></div>
          </div>
        </div>

        <div className="style_HeadContainer">
          <h1 className="style_FreqTitle">게시물 변화 추이</h1>
          <h2 className="style_FreqDiscription">
            게시물수에 대한
            <br />
            변화의 추이를 보여줍니다.
          </h2>
        </div>

        <div className="style_BodyContainer">
          <div className="style_ContainerFrame">
            <div className="style_MatchingDay"></div>
          </div>
        </div>

        <div className="style_HeadContainer">
          <h1 className="style_FreqTitle">네이버 검색 트렌드 & 공포 탐욕 지수</h1>
          <h2 className="style_FreqDiscription">
            네이버 검색 트렌드 :사용자가 선택한 날짜의 게시물 수를 보여줍니다.
            <br />
            공포 탐욕 지수 : API를 통해 받아온 지수를 보여줍니다.
          </h2>
        </div>

        <div className="style_BodyContainer">
          <div className="style_ContainerFrame">
            <div className="style_NaverSearchingTrend"></div>
            <div className="style_FearGreed"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
