import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const CreateOrder = () => {
  const [orderDetails, setOrderDetails] = useState({ name: "", quantity: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = () => {
    alert(`Order created: ${JSON.stringify(orderDetails)}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Занимает всю высоту экрана
        width: "100vw", // Занимает всю ширину экрана
        backgroundColor: "#f5f5f5", // Фон страницы
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: { xs: 2, sm: 3, md: 4 }, // Адаптивные отступы
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%", // Ширина формы (90% от ширины экрана)
          maxWidth: 400, // Максимальная ширина формы
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          Create Order
        </Typography>
        <TextField
          label="Order Name"
          name="name"
          fullWidth
          margin="normal"
          value={orderDetails.name}
          onChange={handleInputChange}
          sx={{ mb: 2 }} // Отступ между полями
        />
        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          fullWidth
          margin="normal"
          value={orderDetails.quantity}
          onChange={handleInputChange}
          sx={{ mb: 3 }} // Отступ перед кнопкой
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, mb: 2, width: "100%" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
};

export default CreateOrder;