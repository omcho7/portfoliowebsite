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
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
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
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} className="menulink" sx={{ border: '1px solid white', borderRadius: '4px', margin: '5px' }}>
                <Typography textAlign="center">
                  <Link to="/">Home</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className="menulink" sx={{ border: '1px solid white', borderRadius: '4px', margin: '5px' }}>
                <Typography textAlign="center">
                  <Link to="/mywork">My Work</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleMailTo} className="menulink" sx={{ border: '1px solid white', borderRadius: '4px', margin: '5px' }}>
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
              sx={{ my: 2, color: "white", display: "block", border: '1px solid white', borderRadius: '4px', margin: '5px' }}
            >
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", border: '1px solid white', borderRadius: '4px', margin: '5px' }}
            >
              <Link to="/mywork" style={{ color: "white" }}>
                My Work
              </Link>
            </Button>
            <Button
              onClick={handleMailTo}
              sx={{ my: 2, color: "white", display: "block", border: '1px solid white', borderRadius: '4px', margin: '5px' }}
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
