import { AppBar, Toolbar } from "@mui/material";

import { Link } from "react-router-dom";
import { navbarItems } from "../navItems";

const theNavItems = navbarItems.map((item) => {
  return (
    <li key={item.key}>
      <Link to={item.name}>{item.label} </Link>
    </li>
  );
});

export function Navbar() {
  return (
    <nav>
      <h1>Tacomania </h1>
      <ul>{theNavItems}</ul>
    </nav>
  );
}
