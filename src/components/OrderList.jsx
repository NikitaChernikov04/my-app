import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const OrderList = () => {
  const orders = [
    { id: 1, name: 'Order 1', quantity: 10 },
    { id: 2, name: 'Order 2', quantity: 20 },
    { id: 3, name: 'Order 3', quantity: 15 },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
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
    </Box>
  );
};

export default OrderList;
