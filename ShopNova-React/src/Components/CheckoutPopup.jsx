import React from "react";

const CheckoutPopup = ({ show, handleClose, cartItems, totalPrice, handleCheckout }) => {
  if (!show) return null; // Hide the modal if not shown

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold">Checkout</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-600">
                  Price: ${item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
          {/* Total Price */}
          <div className="text-right font-bold text-lg">
            Total: <span className="text-green-600">${totalPrice}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end items-center gap-2 border-t p-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md"
          >
            Close
          </button>
          <button
            onClick={handleCheckout}
            className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPopup;
