import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        component={Link}
        to="/create-order"
      >
        Create Order
      </Button>
      <Button
        variant="outlined"
        color="primary"
        sx={{ mt: 2, ml: 2 }}
        component={Link}
        to="/orders"
      >
        View Orders
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ mt: 2, ml: 2 }}
        component={Link}
        to="/profile"
      >
        Profile
      </Button>
    </Box>
  );
};

export default Dashboard;
