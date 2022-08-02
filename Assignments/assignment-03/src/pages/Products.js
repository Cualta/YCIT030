import { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import { Product } from "../components/Product";
import { ProductCard } from "../components/ProductCard";
import { products } from "../productsItems";

const cache = {};

export function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("got products");
        setProducts(data);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("got categories");
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }

    if (cache[selectedCategory]) {
      setProducts(cache[selectedCategory]);
      return;
    }

    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        cache[selectedCategory] = data;
      });
  }, [selectedCategory]);

  return (
    <main>
      <div className="Category">
        <label htmlFor="categories">Choose a category:</label>
        <select
          onChange={(e) => {
            console.log("taco", e.target.value);
            setSelectedCategory(e.target.value);
          }}
          value={selectedCategory}
          name="categories"
          id="categories"
        >
          <option value=""></option>
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <Grid
          display="grid"
          gridTemplateRows="repeat(4, 1fr)"
          gridTemplateColumns={"repeat(3, 1fr)"}
          gap={4}
          component="products"
        >
          {products.map((product) => {
            return (
              <Grid
                item
                key={product.key}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                component="card"
                sx={{ textAlign: "center" }}
              >
                <Product key={product.id} {...product} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </main>
  );
}
