import { CloseOutlined } from "@ant-design/icons";
import clsx from "clsx";
import React, { useEffect } from "react";
import CategorySearch from "../FilterTypes/CategorySearch";
import PriceSearch from "../FilterTypes/PriceSearch";
import RateSearch from "../FilterTypes/RateSearch";
import NameSearch from "../FilterTypes/NameSearch";
import SortSearch from "../SortTypes/SortSearch";
import { useLocalStorage } from "react-use";
import { getProducts } from "../../data/getProducts";

export default function SearchMenu({
  openMenuProduct,
  setOpenMenuProducts,
  setProducts,
  setLoading,
}) {
  const [categoriesSearch, setCategoriesSearch] = useLocalStorage(
    "last-categories",
    []
  );
  const [priceSearch, setPriceSearch] = useLocalStorage("last-price", {
    min: 0,
    max: 10000,
  });
  const [ratingSearch, setRatingSearch] = useLocalStorage("last-rating", {
    min: 0,
    max: 5,
  });
  const [sortSearch, setSortSearch] = useLocalStorage("last-sort", "High Rate");
  const [nameSearch, setNameSearch] = useLocalStorage("last-name", "");

  useEffect(() => {
    getProducts({
      nameSearch,
      priceSearch,
      categoriesSearch,
      ratingSearch,
      sortSearch,
      setProducts,
      setLoading,
    });
  }, [sortSearch, ratingSearch, priceSearch, categoriesSearch, nameSearch]);

  return (
    <div
      className={clsx(
        "flex flex-col transition-all top-0 w-2/5 pl-5 pr-2 h-full rounded-l-3xl bg-slate-100 duration-700 absolute",
        openMenuProduct ? "right-0" : "-right-[700px]"
      )}
    >
      <div className="flex">
        <h2 className="font-bold text-xl text-main-color">SEARCH BY</h2>

        <button
          data-testid="close-button"
          onClick={() => setOpenMenuProducts(!openMenuProduct)}
          className="border-none transition-colors text-2xl bg-transparent ml-auto hover:text-main-color text-slate-400 cursor-pointer"
        >
          <CloseOutlined />
        </button>
      </div>

      <NameSearch setNameSearch={setNameSearch} />

      <div className="flex flex-col">
        <div>
          <CategorySearch setCategoriesSearch={setCategoriesSearch} />
          <PriceSearch
            priceSearch={priceSearch}
            setPriceSearch={setPriceSearch}
          />
          <RateSearch
            ratingSearch={ratingSearch}
            setRatingSearch={setRatingSearch}
          />
        </div>
        <SortSearch sortSearch={sortSearch} setSortSearch={setSortSearch} />
      </div>
    </div>
  );
}
