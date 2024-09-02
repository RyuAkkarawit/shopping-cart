"use client";

import { IconButton, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);
  const handleIncremental = () => {
    setTotal(total + 1);
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ItemCart itemname="iPhone15" handleIncremantal={handleIncremental} />
      <ItemCart itemname="iPhone15 Pro" handleIncremantal={handleIncremental} />
      <ItemCart
        itemname="iPhone15 Pro Max"
        handleIncremantal={handleIncremental}
      />
      <Stack direction="row" spacing={2}>
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4">{total}</Typography>
      </Stack>
    </div>
  );
}
