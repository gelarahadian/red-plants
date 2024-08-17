import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex items-center h-20 bg-white/70 backdrop-blur">
      <div className="flex justify-between items-center w-full max-w-6xl px-4 mx-auto">
        <h3 className="text-xl font-bold ">Red Plants</h3>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Catalogue</li>
            <li>Contacts</li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <p>Search</p>
          <p>Card(0)</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
