import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";

const BuyPaging = () => {
  const [buyNowPage, setBuyNowPage] = useState(1);
  const handleBuyNowPage = (buyNowPage) => {
    setBuyNowPage(buyNowPage);
  };
  return (
    <div>
      <Pagination
        className="style_BuyNowPagination"
        activePage={buyNowPage}
        itemsCountPerPage={5}
        totalItemsCount={100}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handleBuyNowPage}
      ></Pagination>
    </div>
  );
};

export default BuyPaging;
