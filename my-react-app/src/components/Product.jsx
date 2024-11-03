import { StarFilled } from "@ant-design/icons";
import React from "react";

export default function Product({ product }) {
  return (
    <section className="hover:bg-main-color w-48 bg-slate-100 shadow-md transition-all -mr-0 hover:text-white cursor-pointer rounded-md flex flex-wrap group">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-48 w-full rounded-t-md object-cover"
      />
      <div className="px-3 flex flex-col w-full overflow-hidden">
        <p className="font-semibold text-base mt-3 mb-1 overflow-ellipsis truncate">
          {product.name}
        </p>
        <p className="text-base opacity-80 mt-0 mb-2">{product.brand}</p>
        <p className="text-sm opacity-60">{product.category}</p>
        <span className="flex">
          <p>{product.price}$</p>
          <p className="ml-auto">
            {product.rating}
            <StarFilled className="text-main-color group-hover:text-white" />
          </p>
        </span>
      </div>
    </section>
  );
}
