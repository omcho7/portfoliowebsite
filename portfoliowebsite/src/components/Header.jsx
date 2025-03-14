import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import BoltIcon from '@mui/icons-material/Bolt';
import { email } from './config.js';


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMailTo = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", fontFamily: "Montserrat, sans-serif" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BoltIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 5 }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} className="menulink" sx={{ margin: '5px', fontFamily: "Montserrat, sans-serif" }}>
                <Typography textAlign="center">
                  <Link to="/">Home</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className="menulink" sx={{margin: '5px', fontFamily: "Montserrat, sans-serif" }}>
                <Typography textAlign="center">
                  <Link to="/mywork">My Work</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleMailTo} className="menulink" sx={{margin: '5px', fontFamily: "Montserrat, sans-serif" }}>
                <Typography textAlign="center">
                  Contact Me
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", margin: '5px', fontFamily: "Montserrat, sans-serif" }}
            >
              <Link to="/" style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}>
                Home
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", margin: '5px', fontFamily: "Montserrat, sans-serif" }}
            >
              <Link to="/mywork" style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}>
                Portfolio
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", margin: '5px', fontFamily: "Montserrat, sans-serif" }}
            >
              <a href="https://drive.google.com/file/d/1lKUrUAx9RDW1MyG8DIrzGN6YUl_fVBxo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
            <Button
              onClick={handleMailTo}
              sx={{ my: 2, color: "white", display: "block", margin: '5px', fontFamily: "Montserrat, sans-serif" }}
            >
              Contact Me
            </Button>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
