import { Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { ProductsList } from "./components/ProductsList";

export function App() {
  return (
    <>
      <Navbar />
      <div id="app-body">
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="products" element={<ProductsList />}>
            <Route path="info" element={<>ContactInfo</>} />
            <Route path="media" element={<>ContactSocialMedia</>} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}
