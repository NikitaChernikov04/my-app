import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button, Paper } from "@mui/material";

const OrderList = () => {
  const orders = [
    { id: 1, name: "Order 1", quantity: 10 },
    { id: 2, name: "Order 2", quantity: 20 },
    { id: 3, name: "Order 3", quantity: 15 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Занимает всю высоту экрана
        width: "100vw", // Занимает всю ширину экрана
        backgroundColor: "#f5f5f5", // Фон страницы
        padding: { xs: 2, sm: 3, md: 4 }, // Адаптивные отступы
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: { xs: 2, sm: 3, md: 4 }, // Адаптивные отступы
          borderRadius: 2,
          width: "80%", // Ширина формы (100% от ширины экрана)
          maxWidth: 1000, // Максимальная ширина формы
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Orders
        </Typography>
        <Grid container spacing={3}>
          {orders.map((order) => (
            <Grid item xs={12} sm={6} md={4} key={order.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{order.name}</Typography>
                  <Typography color="text.secondary">
                    Quantity: {order.quantity}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    fullWidth
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default OrderList;