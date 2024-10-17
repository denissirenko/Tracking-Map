import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { MapComponent } from "./components/Map";
import Authorization from "./components/Authorization";
import { AUTHORIZATION_KEY } from "./constants/common";

const App: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const savedKey = localStorage.getItem("authKey");

    if (savedKey) {
      setIsAuthorized(true);
    }
  }, []);

  const handleAuthorization = (key: string) => {
    if (key === AUTHORIZATION_KEY) {
      localStorage.setItem("authKey", key);
      setIsAuthorized(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authKey");
    setIsAuthorized(false);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" marginY="30px">
        Tracking Map
      </Typography>
      {isAuthorized ? (
        <>
          <MapComponent />
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              onClick={handleLogout}
              variant="contained"
              color="secondary"
            >
              Log out
            </Button>
          </Box>
        </>
      ) : (
        <Authorization onSubmit={handleAuthorization} />
      )}
    </Container>
  );
};

export default App;
