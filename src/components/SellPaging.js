import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";

const SellPaging = () => {
  const [SellNowPage, setSellNowPage] = useState(1);
  const handleSellNowPage = (SellNowPage) => {
    setSellNowPage(SellNowPage);
  };
  return (
    <div>
      <Pagination
        activePage={SellNowPage}
        itemsCountPerPage={5}
        totalItemsCount={100}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handleSellNowPage}
      ></Pagination>
    </div>
  );
};

export default SellPaging;
