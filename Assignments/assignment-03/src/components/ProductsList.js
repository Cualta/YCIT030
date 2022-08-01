import { Children } from "react";
import { Grid } from "@mui/material";

export function ProductsList(props) {
  const arraychildren = Children.toArray(props.children);

  return (
    <Grid
      display="grid"
      gridTemplateRows="repeat(4, 1fr)"
      gridTemplateColumns={"repeat(3, 1fr)"}
      gap={5}
      component="products"
    >
      {arraychildren.map((child) => {
        return (
          <Grid
            item
            key={child.key}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            component="card"
            sx={{ textAlign: "center" }}
          >
            {child}
          </Grid>
        );
      })}
    </Grid>
  );
}
