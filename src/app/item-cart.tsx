"use client";

import {
  IconButton,
  Stack,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function ItemCart({
  itemname,
  itemPrice,
  onPriceUpdate,
}: {
  itemname: string;
  itemPrice: number;
  onPriceUpdate: (priceChange: number) => void;
}) {
  const [count, setCount] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    onPriceUpdate(itemPrice); // Update the total price in the parent component
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onPriceUpdate(-itemPrice); // Update the total price in the parent component
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 6, md: 8 }}>
        <Typography variant="h6">{itemname}</Typography>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Stack direction="row" spacing={2}>
          <IconButton onClick={handleRemoveItemClick}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={handleAddItemClick}>
            <AddIcon />
          </IconButton>
          <Typography variant="h6">{count * itemPrice} Thb</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
