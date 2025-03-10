import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const AuthPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      onLogin(username);
    } else {
      alert("Please fill in all fields.");
    }
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
      <CssBaseline />
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 3, width: "100%" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }} // Отступ между полями
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3 }} // Отступ перед кнопкой
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              bgcolor: "secondary.main",
              "&:hover": { bgcolor: "secondary.dark" }, // Эффект при наведении
            }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthPage;