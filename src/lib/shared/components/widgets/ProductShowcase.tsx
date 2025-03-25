import productsData from "@/data/items.json";
import { ProductList } from "./components/ProductList";
import { NavBar } from "./components/NavBar";
import { HeaderDescription } from "./components/HeaderDescription";
import { ExtraCard } from "./components/ExtraCard";

const ProductShowcase = () => {
  type ItemContent = {
    id: number;
    name: string;
    item_id: string;
    price: number;
    discount_price?: number;
    path: string;
  };

  const products: ItemContent[] = productsData;

  return (
    <>
      <div className='grid grid-cols-2 gap-4 w-full h-full bg-[#f6f6f6] text-black pt-7 p-5 overflow-y-auto'>
        <HeaderDescription />
        {products.map((product) =>
          product.id === 3 ? (
            <ExtraCard key={product.id} />
          ) : (
            <ProductList
              key={product.id}
              name={product.name}
              item_id={product.item_id}
              price={product.price}
              discount_price={product.discount_price}
              path={product.path}></ProductList>
          ),
        )}
      </div>
      <NavBar></NavBar>
    </>
  );
};

export default ProductShowcase;
