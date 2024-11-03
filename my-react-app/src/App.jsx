import { MenuOutlined} from "@ant-design/icons";
import clsx from "clsx";
import { useState } from "react";
import Product from "./components/Product";
import Loading from "./components/Loading";
import SearchMenu from "./components/ProductsSearch/SearchMenu";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMenuProduct, setOpenMenuProducts] = useState(false);

  return (
    <div className="px-5 rounded-xl bg-slate-100 max-w-screen min-h-full relative">
      <div className="flex">
        <h1 className="font-bold text-3xl font-serif text-main-color">
          Products
        </h1>
        <div className="ml-auto flex items-center">
          <button
            onClick={() => setOpenMenuProducts(!openMenuProduct)}
            className="border-none transition-colors bg-transparent hover:text-main-color text-slate-400 cursor-pointer"
          >
            <MenuOutlined
              className={clsx(
                "text-3xl transition-transform duration-300",
                openMenuProduct ? "rotate-90" : "rotate-0"
              )}
            />
          </button>
        </div>
      </div>
      <div className="border-2 border-solid border-slate-400 rounded-full w-full" />
      <div className="flex pt-5 justify-center relative">
        <Loading loading={loading} />
        {!loading ? (
          products.length ? (
            <main
              style={{ maxHeight: "80vh" }}
              className="w-full flex gap-x-5 gap-y-6 pb-2 overflow-y-auto pl-9 justify-start flex-wrap"
            >
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}{" "}
            </main>
          ) : (
            <h5 className="transition-opacity duration-300">
              Can't find any products
            </h5>
          )
        ) : null}
      </div>
      <SearchMenu
        setLoading={setLoading}
        products={products}
        setProducts={setProducts}
        openMenuProduct={openMenuProduct}
        setOpenMenuProducts={setOpenMenuProducts}
      />
    </div>
  );
}

export default App;
