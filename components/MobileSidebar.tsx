import React, { FC } from "react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed block sm:hidden inset-0 z-[60]">
      <div onClick={onClose} className="absolute inset-0 bg-black/30"></div>
      <div className="absolute h-full bg-white w-3/4 right-0 p-4">
        <button onClick={onClose} className="font-bold">
          X
        </button>
        <ul className="mt-8 space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="w-full h-[2px] bg-gray-200 my-4"></div>
        <div className="space-y-2">
          <p>Search</p>
          <p>Card(0)</p>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
