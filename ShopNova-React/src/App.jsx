import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ContactUs from "./Pages/ContactUs"; 
import Profile from "./Pages/Profile"; 
import { AppProvider } from "./Context/context";
import AddProduct from "./Pages/AddProduct";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add_product" element={<AddProduct />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/ContactUs" element={<ContactUs />} /> 
          <Route path="/AddProduct" element={<AddProduct />} /> 
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
