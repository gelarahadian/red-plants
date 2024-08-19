import React, { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-[60]">
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur"
          onClick={onClose}
        />
        <div className="bg-white z-10 w-full max-w-2xl p-8 pt-6">
          <div className="flex justify-end">
            <button className="font-bold" onClick={onClose}>
              X
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
