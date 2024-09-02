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
    { image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbLhBvXY640Ftbf3g-ovhQ1Wu3rOBlG98lIpJZnyFTFknixTGqHoLEi3VuFyExmEORI_g9ewjiBVP4eN3RVQjYBM6SnSjj3YIWsK2NqVucy3GK2TslplioPQ&usqp=CAE', itemname: "iPhone 15 Pro", price: 41900 },
    { image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ40wtcfOLALfsrHNBbfnc233KsxzBHH53xYtwh3b0KYL25jgidurk8amELMIkOIxdDDTSl5zP_yyPBXm4lsJ1UMd_qgsIrhdBFaE4vBSHXiafmFHGksQQl&usqp=CAE', itemname: "iPhone 15", price: 32900 },
    { image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSY6PIBYbhVVty_rVomhShJZdK9nYWTzukab6U6iOKdVBmAH70nkZg27PoLLnW2iYYXotPhud7bRH68W-J8-pKQg3wPuGPxDbVHdKFYuq1xqDKIGlj_M-fO&usqp=CAE', itemname: "iPad Pro", price: 39900 },
    { image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDvpGy7AFUQVqOseYHvDQ_lVB4nJKmR0kWsTfWXoIJsbwWNq-K7jcrtFb03vRLMf2Jva5587AtJoUpbxH6V1-wrukalDw5AHmhC43XZGWTfrleS1lz1U8L&usqp=CAE', itemname: "iPad Air", price: 23900 },
    { image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2SLedhyBVRcuZgCEKzs4UJ-9c7-2o_FNx6HUZUbvN-lR_XFZ8S6LV3l_2frfw43FRStV33hgusOYKLbTOC2XwuWtO5ukVokAFm-nawAJ2_ZwVfLFXv-TFpg&usqp=CAE', itemname: "iPad", price: 13900 },
    { image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGJfkshGs-kMq45bRgUUJrNevpeIdLPZ93y7q7DagA4XmaZbPO4irVVGd5YOBAh_DkUeBRnJR25CLXa0g3HFeaYrOF-vms0kMnrqRWEwI4PhnOxVDpUlff6g&usqp=CAE', itemname: "iPad mini", price: 19900 },
    { image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQzFBPXv5CUnaIQd2sSI1d_Ir0_5eSSgbGFbKx0XEjFMtozNfON3yMebFKJqlp7IPkwecZJVD4H5eqfg-ZUsltTt8Mtx2dlTM7HfuiSN8e5yQaCcRnqj18C7g&usqp=CAE', itemname: "MacBookAir", price: 34900 },
    { image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3QMVFQfvm4txrmAsCbjzMG9mUzicaGCwZ9OGJ4xXmpBQcGNRl7f3g_UE6q39HFpdoFdwpEfUEReSg9fSrRbcyXdwq1LHcKy36Zsyr6bRuuUbJ4kMA0popMg&usqp=CAE', itemname: "MacBook Pro", price: 59900 },
    { image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmv0GmKzrKpqSVIppIwsWyAqxZcfpraqw0Tk0WPPXGE6cBGpMZLdR4B9lbb7CbZ4mp_L8gy2wm55j_zgWuRztLWdUwS58eNSpXvzsYPs7QX640OiO1OWpEgQ&usqp=CAE', itemname: "iMac", price: 49900 },
    { image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvwkloX9kYftrmfyTXMJMPNLLdkCLuNdOQdy6cNu-HaXjQ2RzgZCrrt8y18ugU8O5i5P3xe-SiTiZSFFqOCpt8cZbW9oyljEIa2ppj4hhnqAS-d7bN9MRdoDU&usqp=CAE', itemname: "Mac mini", price: 20900 },
    { image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqE5U5oNNIqAMqCqdGyVJlpzP8CdymAcJvFPNv-Q3AhsaAV47g2IUGpmQ_KPSmqCYamJVAb1FaDQX8bl786eI-fkTohHmPWj8DguZIw6du-x5pxR3iMz_mAA&usqp=CAE', itemname: "Mac Studio", price: 74900 }
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
              itemimage={item.image}
              itemname={item.itemname}
              itemPrice={item.price}
              onPriceUpdate={handlePriceUpdate}
            />
          ))}
        </CardContent>
      </Card>
      <Stack direction="row" spacing={2} sx={{ paddingTop: "1rem" }}>
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4">{new Intl.NumberFormat('en-US').format(total)} Thb</Typography>
      </Stack>
    </Container>
  );
}
