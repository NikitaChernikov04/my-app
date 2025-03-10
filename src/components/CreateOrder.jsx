import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const CreateOrder = () => {
  const [orderDetails, setOrderDetails] = useState({ name: '', quantity: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = () => {
    alert(`Order created: ${JSON.stringify(orderDetails)}`);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5">Create Order</Typography>
      <TextField
        label="Order Name"
        name="name"
        fullWidth
        margin="normal"
        value={orderDetails.name}
        onChange={handleInputChange}
      />
      <TextField
        label="Quantity"
        name="quantity"
        type="number"
        fullWidth
        margin="normal"
        value={orderDetails.quantity}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default CreateOrder;
