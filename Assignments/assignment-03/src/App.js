import { Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Products } from "./pages/Products";

export function App() {
  return (
    <>
      <Navbar />
      <div id="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}
