import React, { useState } from "react";
import clsx from "clsx";
import { sortTypes } from "../../constants/sort";
import { useDebounce } from "react-use";

export default function SortSearch({ sortSearch, setSortSearch }) {
  const [sortValue, setSortValue] = useState(sortSearch);

  useDebounce(
    () => {
      setSortSearch(sortValue);
    },
    1000,
    [sortValue]
  );
  
  return (
    <div className="ml-4">
      <h4 className="font-bold text-sm mt-0 mb-2 text-main-color/80">
        SORT BY
      </h4>
      <div className="flex flex-wrap gap-2 w-2/3">
        {sortTypes.map((sortType) => {
          return (
            <button
              onClick={() => setSortValue(sortType)}
              key={sortType}
              className={clsx(
                "flex py-1 pl-2 border border-solid text-[13px] font-extralight w-24 transition-colors cursor-pointer duration-300 rounded-md",
                sortValue === sortType
                  ? "bg-main-color text-white border-transparent"
                  : "bg-slate-100 border-gray-500 text-gray-500"
              )}
            >
              {sortType}
            </button>
          );
        })}
      </div>
    </div>
  );
}
