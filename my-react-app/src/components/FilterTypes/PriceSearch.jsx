import React from "react";
import MinMaxSearch from "./MinMaxSearch";

export default function PriceSearch({ priceSearch, setPriceSearch }) {
  return (
    <div className="ml-4">
      <h4 className="font-bold text-[13px] my-0 text-main-color/80">PRICE</h4>
      <form className="flex gap-x-1 items-center">
        <MinMaxSearch
          setRangeValue={setPriceSearch}
          rangeValue={priceSearch}
        />
        <p className="opacity-60">$</p>
      </form>
    </div>
  );
}
