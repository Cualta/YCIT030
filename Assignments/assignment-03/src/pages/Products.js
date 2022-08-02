import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  autocompleteClasses,
} from "@mui/material";
import { useEffect, useState } from "react";

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
      <Box
        sx={{
          mb: 5,
          mx: autocompleteClasses,
          width: 300,
          textAlign: "center",
        }}
        className="Category"
      >
        <FormControl fullWidth>
          <InputLabel
            sx={{ backgroundColor: "white", px: 1, color: "#2f4d73" }}
          >
            Choose a category:
          </InputLabel>
          <Select
            sx={{ textTransform: "capitalize" }}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            value={selectedCategory}
            name="categories"
            id="categories"
          >
            <MenuItem value=""></MenuItem>
            {categories.map((category) => {
              return (
                <MenuItem
                  key={category}
                  value={category}
                  sx={{ textTransform: "capitalize" }}
                >
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

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
    </main>
  );
}
