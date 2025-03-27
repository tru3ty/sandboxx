interface FilterButtonsProps {
  setFilter: (filter: string | null) => void;
}

const FilterButtons = ({ setFilter }: FilterButtonsProps) => {
  return (
    <div className='flex flex-col gap-2 my-4'>
      <button
        onClick={() => setFilter("wood")}
        className='border px-3 py-1 rounded'>
        Дерево
      </button>
      <button
        onClick={() => setFilter("plastic")}
        className='border px-3 py-1 rounded'>
        Пластик
      </button>
      <button
        onClick={() => setFilter("metal")}
        className='border px-3 py-1 rounded'>
        Металл
      </button>
      <button
        onClick={() => setFilter(null)}
        className='border px-3 py-1 rounded'>
        Сбросить
      </button>
    </div>
  );
};

export default FilterButtons;
