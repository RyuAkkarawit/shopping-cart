"use client";

import {
  Stack,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);

  // Array of items with their prices
  const myItems = [
    { itemname: "iPhone 15 Pro", price: 41900 },
    { itemname: "iPhone 15", price: 32900 },
    { itemname: "iPad Pro", price: 39900 },
    { itemname: "iPad Air", price: 23900 },
    { itemname: "iPad", price: 13900 },
    { itemname: "iPad mini", price: 19900 },
    { itemname: "MacBookAir", price: 34900 },
    { itemname: "MacBook Pro", price: 59900 },
    { itemname: "iMac", price: 49900 },
    { itemname: "Mac mini", price: 20900 },
    { itemname: "Mac Studio", price: 74900 }
  ];

  // Function to handle the total price update
  const handlePriceUpdate = (priceChange: number) => {
    setTotal((prevTotal) => prevTotal + priceChange);
  };

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <Card>
        <CardContent>
          {myItems.map((item) => (
            <ItemCart
              key={item.itemname}
              itemname={item.itemname}
              itemPrice={item.price}
              onPriceUpdate={handlePriceUpdate}
            />
          ))}
        </CardContent>
      </Card>
      <Stack direction="row" spacing={2} sx={{ paddingTop: "1rem" }}>
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4">{total} Thb</Typography>
      </Stack>
    </Container>
  );
}
