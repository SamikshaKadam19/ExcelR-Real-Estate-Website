import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Container, Popover, Button } from "@mui/material";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const Title = Typography;

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  let id = open ? 'simple-popover' : undefined;
   id = open ? 'simple-popover' : undefined;

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
          id={id}
          open={open}
          anchorEl={anchorEl}
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
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}

              style={{ backgroundColor: "#0F1B4C", color: "#fff" }}
            >
              Sign Up
            </Button>
          </div>


          <div>
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
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
