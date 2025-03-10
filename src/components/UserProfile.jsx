import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from '@mui/material';

const UserProfile = () => {
  const [userName, setUserName] = useState('User Name');
  const [reminderEnabled, setReminderEnabled] = useState(false);

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
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
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => alert('Profile updated!')}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default UserProfile;
