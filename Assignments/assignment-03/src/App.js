import { Link, Route, Routes } from "react-router-dom";

import { About } from "./About";
import { Cart } from "./Cart";
import { Products } from "./Products";
import { navbarItems } from "./navItems";

export function App() {
  let style = ({ isHover }) => ({
    color: isHover ? "#284975" : "",
  });

  const theNavItems = navbarItems.map((el) => {
    return (
      <li key={el.key}>
        <Link to={el.name}>{el.label} </Link>
      </li>
    );
  });

  return (
    <>
      <nav>
        <h1>Tacomania </h1>
        <ul>{theNavItems}</ul>
      </nav>
      <div id="app-body">
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="products" element={<Products />}>
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
