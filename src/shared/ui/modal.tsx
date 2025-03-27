import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  return createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
      <div
        className='absolute top-0 left-0 w-full h-full bg-black opacity-50'
        onClick={onClose}
      />
      <div className='relative z-50'>{children}</div>
    </div>,
    document.body,
  );
}
