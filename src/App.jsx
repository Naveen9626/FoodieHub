import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/HeroTemp.jsx";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import FoodDetails from "./pages/FoodDetails";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    const existingItem = cart.find((item) => item.id === food.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>

      {/* Navbar எல்லா pages-லயும் இருக்கும் */}
      <Navbar cartCount={cart.length} />

      {/* Page Routes */}
      <Routes>

        {/* Home */}
        <Route path="/" element={<Hero />} />

        {/* Menu */}
        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/menu/:id"
          element={<FoodDetails addToCart={addToCart} />}
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              setCart={setCart}
           />
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;