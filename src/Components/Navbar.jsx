import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Popover, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Title = Typography;

export const Navbar = () => {
  const [signupAnchorEl, setSignupAnchorEl] = useState(null);
  const [loginAnchorEl, setLoginAnchorEl] = useState(null);

  const handleSignupClick = (event) => {
    setSignupAnchorEl(event.currentTarget);
  };

  const handleLoginClick = (event) => {
    setLoginAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSignupAnchorEl(null);
    setLoginAnchorEl(null);
  };

  const signupOpen = Boolean(signupAnchorEl);
  const loginOpen = Boolean(loginAnchorEl);
  const signupId = signupOpen ? 'signup-popover' : undefined;
  const loginId = loginOpen ? 'login-popover' : undefined;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Popover
            id={signupId}
            open={signupOpen}
            anchorEl={signupAnchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box sx={{ p: 2 }}>
              <Link to="/Signup" style={{ textDecoration: 'none' }}>
                <Typography>User</Typography>
              </Link>

              <Link to="/Signup" style={{ textDecoration: 'none' }}>
                <Typography>Broker/Agent</Typography>
              </Link>
            </Box>
          </Popover>
          <Popover
            id={loginId}
            open={loginOpen}
            anchorEl={loginAnchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box sx={{ p: 2 }}>
              <Link to="/Login" style={{ textDecoration: 'none' }}>
                <Typography>User</Typography>
              </Link>

              <Link to="/Login" style={{ textDecoration: 'none' }}>
                <Typography>Broker/Agent</Typography>
              </Link>
            </Box>
          </Popover>
          <Title>realEstate.</Title>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
            
          <div>
            <Button
              aria-describedby={signupId}
              variant="contained"
              onClick={handleSignupClick}
              style={{ backgroundColor: "#0F1B4C", color: "#fff" }}
            >
              Sign Up
            </Button>
          </div>

          <div>
            <Button
              aria-describedby={loginId}
              variant="contained"
              onClick={handleLoginClick}
              style={{ backgroundColor: "#0F1B4C", color: "#fff" }}
            >
              Login
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;