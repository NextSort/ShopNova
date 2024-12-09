import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between"
        >
          <div className="p-4 flex flex-col justify-between h-full">
            {/* Product Name */}
            <h5 className="text-lg font-semibold mb-2">{product.name.toUpperCase()}</h5>
            <p className="italic text-sm text-gray-600 mb-4">by {product.brand}</p>
            
            <hr className="border-t border-gray-200 mb-4" />

            {/* Product Price */}
            <div className="text-lg font-bold text-gray-800 mb-4">
              ₹{product.price}
            </div>

            {/* Add to Cart Button */}
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;