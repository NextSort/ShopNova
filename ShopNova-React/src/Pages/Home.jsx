import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate(); // React Router navigation function

  useEffect(() => {
    const fetchData = async () => {
      try {
        const PROD_API_URL = "http://localhost:8080/api/products/";
        const response = await axios.get(PROD_API_URL);
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  if (isError) {
    return (
      <h2 className="text-center text-red-600 text-xl mt-40">
        Something went wrong...
      </h2>
    );
  }

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to Product page with the product ID
  };

  return (
    <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => handleProductClick(product.id)} // Navigate on click
        >
          <div className="p-4 flex flex-col justify-between h-full">
            {/* Product Image (optional) */}
            <div className="flex justify-center mb-4">
              <img
                src={product.image || "https://via.placeholder.com/300"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Product Name */}
            <h5 className="text-xl font-semibold text-gray-800 mb-2">
              {product.name.toUpperCase()}
            </h5>

            <p className="italic text-sm text-gray-600 mb-4">by {product.brand}</p>

            <hr className="border-t border-gray-200 mb-4" />

            {/* Product Price */}
            <div className="text-lg font-bold text-gray-800 mb-4">
              ${product.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
