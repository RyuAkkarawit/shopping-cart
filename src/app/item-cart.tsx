/** @format */

"use client";

import { IconButton, Stack, Typography, Grid2 } from "@mui/material";
import React from "react";

export default function ItemCart({
  itemname,
  itemimage,
  itemPrice,
  onPriceUpdate,
}: {
  itemname: string;
  itemimage: string;
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
    <Grid2 container spacing={1}>
      <Grid2 size={{ xs: 6, md: 8 }}>
        <div>
          <img src={itemimage} alt="image" style={{width: '96px', height: '96px'}} />
          <Typography variant="h6">{itemname}</Typography>
        </div>
      </Grid2>
      <Grid2 size={{ xs: 6, md: 4 }}>
        <Stack direction="row" spacing={2}>
          <IconButton onClick={handleRemoveItemClick}>
            -
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={handleAddItemClick}>
            +
          </IconButton>
          <Typography variant="h6">{new Intl.NumberFormat('en-US').format(count * itemPrice)} Thb</Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
}
