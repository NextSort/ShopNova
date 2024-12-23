import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AppContext from "../Context/context";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(AppContext);

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 font-bold text-xl">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-6 pt-20">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>
      
      {/* Grid Layout for Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cart.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="flex flex-col justify-between items-center p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the link from being triggered when removing from cart
                removeFromCart(item.id);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </Link>
        ))}
      </div>

      {/* Clear Cart Button */}
      <button
        onClick={clearCart}
        className="mt-6 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 block mx-auto"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
