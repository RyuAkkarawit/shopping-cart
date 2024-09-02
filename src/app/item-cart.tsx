"use client";
import {
  IconButton,
  Button,
  Stack,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function ItemCart({
  itemname,
  handleIncremantal,
}: {
  itemname: string;
  handleIncremantal: () => void;
}) {
  const itemPrice = 100;
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setTotalPrice(newCount * itemPrice);
    handleIncremantal();
  };

  
  

  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 6, md: 8 }}>
        <Typography variant="h6">{itemname}</Typography>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Stack direction="row" spacing={2}>
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={handleAddItemClick}>
            <AddIcon />
          </IconButton>
          <Typography variant="h6">{totalPrice} Thb</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
