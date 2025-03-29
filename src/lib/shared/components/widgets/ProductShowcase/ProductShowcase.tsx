"use client";

import productsData from "@/data/items.json";
import { ProductList } from "./components/ProductList";
import { NavBar } from "./components/NavBar";
import { HeaderDescription } from "./components/HeaderDescription";
import { ExtraCard } from "./components/ExtraCard";
import { useState } from "react";

const ProductShowcase = () => {
  type ItemContent = {
    id: number;
    name: string;
    item_id: string;
    price: number;
    type: "wood" | "metal" | "plastic";
    discount_price?: number;
    path: string;
  };

  const [filter, setFilter] = useState<string | null>("");

  const products: ItemContent[] = productsData;

  const filteredProducts = filter
    ? products.filter((product) => product.type === filter)
    : products;

  return (
    <>
      <div className='grid grid-cols-2 gap-4 w-full h-full bg-[#f6f6f6] text-black pt-7 p-5 overflow-y-auto'>
        <HeaderDescription setFilter={setFilter} />
        {filteredProducts.map((product, index) => (
          <>
            <ProductList
              key={product.id}
              name={product.name}
              item_id={product.item_id}
              price={product.price}
              discount_price={product.discount_price}
              path={product.path}
            />
            {index === 1 && <ExtraCard key={index} />}
          </>
        ))}
      </div>
      <NavBar></NavBar>
    </>
  );
};

export default ProductShowcase;
