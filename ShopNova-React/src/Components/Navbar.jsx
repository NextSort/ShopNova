import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Navbar = ({
  initialCategories = ["All", "Electronics", "Fashion", "Home & Kitchen", "Sports"],
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(initialCategories);

  // Fetch categories from an API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const CAT_API_URL = "http://localhost:8080/api/categories";
        const response = await fetch(CAT_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(["All", ...data]); // Include "All" as the first category
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <header className="bg-gray-700 text-white shadow-md fixed left-0 top-0 z-50 w-full pr-8">
      <nav className="container mx-4 py-2 sm:py-3 md:py-4 lg:py-5 justify-between w-full flex items-center">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2 mr-8 bg-transparent">
          <img
            src="src/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <Link to="/" className="hover:text-gray-300 text-3xl">
            ShopNova
          </Link>
        </div>

        {/* Category Dropdown and Search */}
        <div className="hidden md:flex flex-1 items-center gap-1 relative">
          <div className="relative">
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

          <input
            type="search"
            name="search"
            placeholder="Search"
            className="w-3/4 rounded-r-lg px-3 py-2 text-black focus:outline-none"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="font-semibold hover:text-gray-300 text-xl">
            Features
          </Link>
          <Link to="/" className="font-semibold hover:text-gray-300 text-xl">
            AddProduct
          </Link>
          <Link to="/ContactUs" className="font-semibold hover:text-gray-300 text-xl">
            Contact Us
          </Link>
          <Link to="/cart" className="font-semibold hover:text-gray-300">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
          </Link>
          <Link to="/profile" className="font-semibold hover:text-gray-300">
            <i className="fa-solid fa-user text-2xl"></i>
          </Link>
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
          <div className="px-4 py-3 flex items-center gap-2">
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
              <Link to="/" className="block font-semibold hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="block font-semibold hover:text-gray-300">
                Features
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block font-semibold hover:text-gray-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/cart" className="block font-semibold hover:text-gray-300">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/profile" className="block font-semibold hover:text-gray-300">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
