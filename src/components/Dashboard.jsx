import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
          maxWidth: 600, // Максимальная ширина формы
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Welcome to the Dashboard
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "100%", maxWidth: 300 }}
          component={Link}
          to="/create-order"
        >
          Create Order
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 2, width: "100%", maxWidth: 300 }}
          component={Link}
          to="/orders"
        >
          View Orders
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 2, width: "100%", maxWidth: 300 }}
          component={Link}
          to="/profile"
        >
          Profile
        </Button>
      </Paper>
    </Box>
  );
};

export default Dashboard;