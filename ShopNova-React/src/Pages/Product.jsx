import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "../axios";
import AppContext from "../Context/context";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(AppContext);

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false); 
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(response.data);
        setError(false); // Clear any previous error
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(true);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return (
      <h2 className="text-center text-lg font-semibold mt-40 text-red-500">
        Unable to load the product. Please try again later.
      </h2>
    );
  }

  if (!product) {
    return <h2 className="text-center text-lg font-semibold mt-40">Loading...</h2>;
  }

  const isAvailable = product.quantity > 0;

  // Format the release date using JavaScript Date object
  const formattedDate = new Date(product.releaseDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="container mx-auto p-6 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Product Details */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <span className="text-gray-500 text-sm uppercase tracking-wide">{product.category}</span>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
            <h5 className="text-lg text-gray-600">{product.brand}</h5>
          </div>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {/* Right Column: Product Actions */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6">
          <div className="mb-6">
            <span className="text-2xl font-semibold text-green-600">${product.price}</span>
          </div>
          <button
            className={`w-full py-2 px-4 text-white font-semibold rounded-lg ${
              isAvailable ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isAvailable}
            onClick={handleAddToCart}
          >
            {isAvailable ? "Add to Cart" : "Out of Stock"}
          </button>
          <h6 className="mt-4 text-gray-700">
            Stock Available: <span className="font-bold text-green-600">{product.quantity}</span>
          </h6>
          <p className="mt-4 text-gray-600">
            <span className="font-semibold">Product listed on:</span>{" "}
            <i>{product.releaseDate}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
