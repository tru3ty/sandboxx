import { AlignLeft, ShoppingCart } from "lucide-react";

export const NavBar = () => {
  return (
    <nav className='p-6 flex justify-between items-center fixed bottom-0 w-full h-24 bg-[#ffffff]'>
      <button>
        <AlignLeft
          size={25}
          color='#2c2c2b'
        />
      </button>
      <h2 className='text-3xl text-black'>Modu</h2>
      <button>
        <ShoppingCart
          color='#2c2c2b'
          size={25}
        />
      </button>
    </nav>
  );
};
