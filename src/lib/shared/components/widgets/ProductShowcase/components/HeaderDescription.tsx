"use client";

import { ArrowDownNarrowWide, Cone, Search } from "lucide-react";
import { useState } from "react";
import "./modal.css";
import Modal from "./Modal";

export const HeaderDescription = ({
  setFilter,
}: {
  setFilter: (filter: string | null) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='relative row-span-2'>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          setFilter={setFilter}
        />
      )}
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
        <div className='relative inline-block'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='border-2 border-gray-300 rounded-full p-2'>
            <Cone
              color='gray'
              size={25}
            />
          </button>
        </div>
      </nav>
    </section>
  );
};
