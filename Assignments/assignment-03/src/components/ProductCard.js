import { Box, Button, Paper, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export function ProductCard(props) {
  const {
    id,
    name,
    description,
    imgSrc,
    imgAlt,
    price,
    setProductId,
    addToCart,
  } = props;

  const styles = {
    paper: {
      justifyContent: "center",
      mx: "auto",
      component: "content",
      textAlign: "center",
    },
  };

  return (
    <div onClick={setProductId}>
      <Paper sx={styles.paper}>
        <Box flexDirection="column" p={1.5}>
          <Typography color={grey[800]} variant="h5" textAlign={"center"}>
            {name}
          </Typography>

          <CardMedia
            component="img"
            image={imgSrc}
            alt={imgAlt}
            sx={{ width: 150, mx: "auto", my: 2 }}
          />
          <Typography
            pl={0.12}
            fontSize={15}
            color={"#a95b17"}
            textAlign="center"
          >
            {description}
          </Typography>
          <Typography textAlign="center">{price}</Typography>
          <div>
            <FormControl sx={{ mt: 3, mb: 2 }}>
              {/* <FormLabel id="demo-radio-buttons-group-label">
                                Color
                            </FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                flexDirection="row"
              >
                <FormControlLabel
                  value="yellow"
                  control={<Radio />}
                  label="Yellow"
                />
                <FormControlLabel value="red" control={<Radio />} label="Red" />
                <FormControlLabel
                  value="green"
                  control={<Radio />}
                  label="Green"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addToCart();
            }}
            sx={{
              backgroundColor: "#bf8585",
              color: "#000",
              my: 2,
              px: 5,
            }}
          >
            <AddShoppingCartIcon />
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
