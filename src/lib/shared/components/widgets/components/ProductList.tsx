import { ShoppingBag } from "lucide-react";
import Image from "next/image";

interface ProductProps {
  id: number;
  name: string;
  item_id: string;
  price: number;
  discount_price?: number;
  path: string;
  key: number;
}

export const ProductList: React.FC<ProductProps> = ({
  name,
  item_id,
  price,
  discount_price,
  path,
  key,
}) => {
  return (
    <div
      key={key}
      className='bg-[#ffffff] row-span-3  rounded-3xl p-4 font-bold'>
      <h3 className='font-bold '>{name}</h3>
      <figcaption className='text-[#b2aeab] font-bold mb-4'>{item_id}</figcaption>
      <Image
        alt='Product Showcase'
        className='mb-4'
        height={170}
        width={170}
        src={"/img/photo_2025-03-24_17-33-45.jpg"}></Image>
      <div className='flex flex-row justify-between'>
        {discount_price ? (
          <div className='flex flex-col '>
            <span className='line-through text-black text-xs mb-1.5'>${price}</span>
            <span className='text-[20px] text-[#c70b18] font-bold'>${discount_price}</span>
          </div>
        ) : (
          <div className='flex flex-col-reverse'>
            <span className='text-[20px]'>${price}</span>
          </div>
        )}
        <button className='flex items-center justify-center h-12 w-12 rounded-full border-2 border-[#2c2c2b] bg-[#2c2c2b]'>
          <ShoppingBag
            color='white'
            size={25}
          />
        </button>
      </div>
    </div>
  );
};
