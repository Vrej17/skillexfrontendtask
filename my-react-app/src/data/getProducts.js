import { productsDb } from "../constants/productsDb";
import { sortFunctions } from "../constants/sort";

export const getProducts = async ({
  nameSearch,
  sortSearch,
  categoriesSearch,
  priceSearch,
  ratingSearch,
  setProducts,
  setLoading,
}) => {
  setLoading(true);
  await new Promise((res) => {
    setTimeout(() => {
      res("Fetched products");
    }, 2000);
  });

  const filteredProducts = productsDb.filter((product) => {
    if (categoriesSearch.length && !categoriesSearch.includes(product.category))
      return false;

    if (
      (priceSearch.max && priceSearch.max < product.price) ||
      priceSearch.min > product.price
    )
      return false;
    if (
      (ratingSearch.max && ratingSearch.max < product.rating) ||
      ratingSearch.min > product.rating
    )
      return false;

    if (
      nameSearch.length &&
      !product.name.toLowerCase().includes(nameSearch.toLowerCase())
    )
      return false;

    return true;
  });

  if (sortSearch.length && filteredProducts.length) {
    filteredProducts.sort(sortFunctions[sortSearch]);
  }

  setProducts(filteredProducts);
  setLoading(false);
};
