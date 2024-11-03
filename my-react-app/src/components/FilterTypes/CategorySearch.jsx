import clsx from "clsx";
import React, { useState } from "react";
import { categoryTypes } from "../../constants/categories";
import { useDebounce } from "react-use";

export default function CategorySearch({ setCategoriesSearch }) {
  const [categoryValue, setCategoryValue] = useState([]);
  function handleFilterCategoryChange(event) {
    const { value } = event.target;
    if (!categoryValue.includes(value)) {
      setCategoryValue([...categoryValue, value]);
    } else {
      setCategoryValue(categoryValue.filter((category) => category !== value));
    }
  }

  useDebounce(
    () => {
      setCategoriesSearch(categoryValue);
    },
    1000,
    [categoryValue]
  );

  return (
    <div className="ml-3">
      <h4 className="font-bold text-[13px] mt-7 text-main-color/80">
        CATEGORY
      </h4>
      <form className="flex overflow-x-auto gap-x-2 mb-0 rounded-md">
        {categoryTypes.map((category) => (
          <label
            className={clsx(
              "rounded-full px-2 py-1 min-w-max transition-colors font-extralight duration-300 cursor-pointer border border-solid",
              categoryValue.includes(category)
                ? "bg-main-color border-main-color text-white"
                : "bg-transparent border-transparent text-black/60"
            )}
            key={category}
          >
            <input
              type="checkbox"
              className="hidden"
              name="categories"
              value={category}
              onChange={handleFilterCategoryChange}
            />
            {category}
          </label>
        ))}
      </form>
    </div>
  );
}
