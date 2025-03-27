import { useEffect, useRef } from "react";
import FilterButtons from "./FilterButtons";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  setFilter: (filter: string | null) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, setFilter }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener("touchstart", handleClick);
    return () => document.removeEventListener("touchstart", handleClick);
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className='absolute right-0 top-0 w-full h-full z-10 bg-white p-4 rounded-lg shadow-lg modal open'>
      <FilterButtons setFilter={setFilter} />
    </div>
  );
};

export default Modal;
