import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Проверка на мобильные устройства

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Food Order Management
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/dashboard" sx={{ mx: 1 }}>
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/orders" sx={{ mx: 1 }}>
            Orders
          </Button>
          <Button color="inherit" component={Link} to="/profile" sx={{ mx: 1 }}>
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;