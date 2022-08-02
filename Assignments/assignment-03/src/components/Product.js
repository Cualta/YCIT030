import { Box, CardMedia, Grid, Paper, Typography } from "@mui/material";

import { Children } from "react";
import { grey } from "@mui/material/colors";

export function Product(props) {
  const { title, description, image, id, rating, price, category } = props;

  const styles = {
    paper: {
      justifyContent: "center",
      mx: "auto",
      component: "content",
      textAlign: "center",
    },
  };

  return (
    <Paper sx={styles.paper} className="Product">
      <Box flexDirection="column" p={1.5}>
        <Typography color={grey[800]} variant="h5" textAlign={"center"}>
          {title}
        </Typography>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: 150, height: 200, mx: "auto", my: 2 }}
        />

        <Typography variant="h4" textAlign="center">
          {price}
        </Typography>
        <Typography pl={0.12} color={"#a95b17"} textAlign="center">
          {category}
        </Typography>
      </Box>
    </Paper>
  );
}
