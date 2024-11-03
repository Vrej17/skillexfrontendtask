import { StarFilled } from "@ant-design/icons";
import React from "react";
import MinMaxSearch from "./MinMaxSearch";

export default function RateSearch({ ratingSearch, setRatingSearch }) {
  return (
    <div className="ml-4">
      <h4 className="font-bold text-[13px] my-0 text-main-color/80">RATE</h4>
      <form className="flex gap-x-1 items-center">
        <MinMaxSearch
          setRangeValue={setRatingSearch}
          rangeValue={ratingSearch}
        />
        <p className="opacity-60">
          <StarFilled className="text-main-color" />
        </p>
      </form>
    </div>
  );
}
