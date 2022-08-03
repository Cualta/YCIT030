import { Box, Button, CardMedia, Paper, Typography } from "@mui/material";
import { useAppStore, useDialogStore } from "../store";

import { Add } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export function Product(props) {
  const { title, image, id, price, category } = props;

  const { open, getResult } = useDialogStore();

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
      <Box key={id} flexDirection="column" p={1}>
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
          onClick={async (e) => {
            //e.setSelectedProduct(e.open);
            open();

            const dialogPromise = new Promise((resolve) => {
              setInterval(() => {
                const result = getResult();
                if (result !== null) {
                  resolve(result);
                }
              }, 50);
            });

            const dialogResult = await dialogPromise;
          }}
        >
          See details
        </Button>
      </Box>
    </Paper>
  );
}
