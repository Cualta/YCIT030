import { Box, Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { useAppStore, useDialogStore } from "../store";

import { Add } from "@mui/icons-material";
import { Children } from "react";
import { grey } from "@mui/material/colors";

export function Product(props) {
  const { title, description, image, id, rating, price, category } = props;

  const { role, addToCart: addToCart } = useAppStore();
  const { msgBox, msgBoxYN } = useDialogStore();

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
      <Box flexDirection="column" p={1}>
        <Typography
          sx={{ mb: 2, px: 1 }}
          color={grey[800]}
          variant="h6"
          textAlign={"center"}
        >
          {title}
        </Typography>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: 150, mx: "auto", my: 2 }}
        />

        <Typography variant="h4" textAlign="center">
          {price}
        </Typography>
        <Typography
          sx={{ textTransform: "capitalize" }}
          pl={0.12}
          color={"#a95b17"}
          textAlign="center"
        >
          {category}
        </Typography>
      </Box>
      <Box
        sx={{
          "& button": { m: 1, mb: 2, mr: 2 },
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Button
          sx={{ alignContent: "center" }}
          variant="outlined"
          size="small"
          startIcon={<Add />}
          onClick={async () => {
            const result = await msgBoxYN("Add to cart") // prettier-ignore

            if (result === "yes") {
              addToCart();
            }
          }}
        >
          See details
        </Button>
      </Box>
    </Paper>
  );
}
