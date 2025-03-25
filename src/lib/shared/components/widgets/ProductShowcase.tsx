import { ArrowDownNarrowWide, Search, Cone, ShoppingBag } from "lucide-react";
import Image from "next/image";
import productsData from "@/data/items.json";

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
    <div className='grid grid-cols-2 gap-4 w-full h-full bg-[#f6f6f6] text-black pt-7 p-5 overflow-y-auto'>
      <section className=' row-span-2'>
        <h2 className='text-4xl font-extrabold mb-8'>CHAIRS</h2>
        <figcaption className='text-[14px] text-[#b2aeab] mb-11'>
          Repurposed Materials, Unique Style, Sustainable Comfort.
        </figcaption>
        <nav className='flex flex-row justify-between'>
          <button className='border-2 border-gray-300 rounded-full p-2'>
            <Search
              color='gray'
              size={25}></Search>
          </button>
          <button className='border-2 border-gray-300 rounded-full p-2 '>
            <ArrowDownNarrowWide
              color='gray'
              size={25}
            />
          </button>
          <button className='border-2 border-gray-300 rounded-full p-2'>
            <Cone
              color='gray'
              size={25}
            />
          </button>
        </nav>
      </section>
      {products.map((product) =>
        product.id === 3 ? (
          <section
            key={product.id}
            className='bg-[#575757] row-span-1  rounded-3xl p-4 font-bold'>
            <h3 className='text-white'>Showroom</h3>
            <figcaption className='text-[#b2aeab]'>
              9810 Irvine Center Dr, Irvine, CA 92618
            </figcaption>
          </section>
        ) : (
          <div
            key={product.id}
            className='bg-[#ffffff] row-span-3  rounded-3xl p-4 font-bold'>
            <h3 className='font-bold '>{product.name}</h3>
            <figcaption className='text-[#b2aeab] font-bold mb-4'>{product.item_id}</figcaption>
            <Image
              alt='Product Showcase'
              className='mb-4'
              height={170}
              width={170}
              src={"/img/photo_2025-03-24_17-33-45.jpg"}></Image>
            <div className='flex flex-row justify-between'>
              {product.discount_price ? (
                <div className='flex flex-col '>
                  <span className='line-through text-black text-xs mb-1.5'>${product.price}</span>
                  <span className='text-[20px] text-[#c70b18] font-bold'>
                    ${product.discount_price}
                  </span>
                </div>
              ) : (
                <div className='flex flex-col-reverse'>
                  <span className='text-[20px]'>${product.price}</span>
                </div>
              )}
              <button className='flex items-center justify-center h-12 w-12 rounded-full border-2 border-[#1a1814] bg-[#1a1814]'>
                <ShoppingBag
                  color='white'
                  size={25}
                />
              </button>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default ProductShowcase;
