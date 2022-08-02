import { Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";

export function App() {
  return (
    <>
      <Navbar />
      <div id="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />}>
            <Route path="info" element={<>ContactInfo</>} />
            <Route path="media" element={<>ContactSocialMedia</>} />
          </Route>

          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}
