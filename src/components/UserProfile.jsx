import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Paper,
} from "@mui/material";

const UserProfile = () => {
  const [userName, setUserName] = useState("User Name");
  const [reminderEnabled, setReminderEnabled] = useState(false);

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
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, width: "100%" }}>
          <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
            {userName.charAt(0)}
          </Avatar>
          <TextField
            label="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
          />
        </Box>
        <FormControlLabel
          control={
            <Switch
              checked={reminderEnabled}
              onChange={(e) => setReminderEnabled(e.target.checked)}
            />
          }
          label="Enable Reminders"
          sx={{ width: "100%", mb: 3 }} // Отступ и ширина
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "100%" }}
          onClick={() => alert("Profile updated!")}
        >
          Save Changes
        </Button>
      </Paper>
    </Box>
  );
};

export default UserProfile;