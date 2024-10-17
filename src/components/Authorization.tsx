import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

import { AUTHORIZATION_KEY } from "../constants/common";

interface AuthorizationProps {
  onSubmit: (key: string) => void;
}

const Authorization: React.FC<AuthorizationProps> = ({ onSubmit }) => {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key) {
      if (key === AUTHORIZATION_KEY) {
        setError("");
        onSubmit(key);
      } else {
        setError("The key is incorrect. Please try again.");
      }
    } else {
      setError("The key cannot be empty");
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "500px",
          width: "100%",
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Enter a unique access key
        </Typography>
        <TextField
          label="Authorization Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          fullWidth
          error={!!error}
          helperText={error}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Log in
        </Button>
      </Box>
    </Box>
  );
};

export default Authorization;
