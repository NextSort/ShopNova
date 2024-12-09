import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Sports",
  ];

  return (
    <header className="bg-gray-700 text-white shadow-md fixed left-0 top-0 z-50 w-full">
      <nav className="container mx-4 py-2 sm:py-3 md:py-4 lg:py-5 justify-between w-full flex items-center">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2 mr-8 bg-transparent">
          <img
            src="src/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
            href="#"
          />
          <a href="#" className="hover:text-gray-300 text-3xl">
            ShopNova
          </a>
        </div>
        <div className="hidden md:flex flex-1 items-center gap-1 relative">
          {/* Category Dropdown */}
          <div className="relative ">
            <button
              className="bg-gray-700 px-4 py-2 rounded-l-lg focus:outline-none hover:bg-gray-600 flex items-center gap-1"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedCategory}
              <i className="fa-solid fa-caret-down"></i>
            </button>

            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-gray-700 text-sm rounded-lg shadow-lg z-50 w-52">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      className="block px-4 py-2 text-left w-full hover:bg-gray-600 hover:text-gray-300"
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Input */}
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="w-3/4 rounded-r-lg px-3 py-2 text-black focus:outline-none"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="font-semibold hover:text-gray-300 text-xl">
            Features
          </a>
          <a href="#" className="font-semibold hover:text-gray-300 text-xl">
            Contact Us
          </a>
          <a href="#" className="font-semibold hover:text-gray-300">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
          </a>
          <a href="#" className="font-semibold hover:text-gray-300">
            <i className="fa-solid fa-user text-2xl"></i>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-end">
          <button
            className="text-xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-gray-700 md:hidden">
          {/* Mobile Search and Dropdown */}
          <div className="px-4 py-3 flex items-center gap-2 ">
            <div className="relative flex-1">
              <button
                className="bg-gray-800 px-4 py-2 rounded-l-lg text-left w-full hover:bg-gray-600 focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedCategory}
                <i className="fa-solid fa-caret-down float-right"></i>
              </button>

              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-gray-700 text-sm rounded-lg shadow-lg w-full z-50">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        className="block px-4 py-2 text-left w-full hover:bg-gray-600 hover:text-gray-300"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input
              type="search"
              name="search"
              placeholder="Search"
              className="flex-1 rounded-r-lg px-3 py-2 text-black focus:outline-none"
            />
          </div>

          {/* Mobile Navigation Links */}
          <ul className="px-4 py-2 space-y-2">
            <li>
              <a href="#" className="block font-semibold hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block font-semibold hover:text-gray-300">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="block font-semibold hover:text-gray-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="block font-semibold hover:text-gray-300">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="block font-semibold hover:text-gray-300">
                Profile
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;