import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom"
import { useSignOut } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../hooks/auth';

function NavigationBar() {

  const { isAuthenticated,setIsAuthenticated } = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate()
  const { signOut } = useSignOut();


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleSignOut = () => {
    signOut()
    alert("Signed out")
    setIsAuthenticated(false)
    navigate('/signin');
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

            <Link to='/'>
              <MenuItem key={'home'} >
                <Typography textAlign="center">{'home'}</Typography>
              </MenuItem>
            </Link>
            <Link to='/doctors'>
              <MenuItem key={'doctors'} >
                <Typography textAlign="center">{'doctors'}</Typography>
              </MenuItem>
            </Link>

            { !isAuthenticated? <><Link to='/signin'>
              <MenuItem key={'sign in'} >
                <Typography textAlign="center">{'sign in'}</Typography>
              </MenuItem>
              </Link> <Link to='/signup'>
              <MenuItem key={'sign up'} >
                <Typography textAlign="center">{'sign up'}</Typography>
              </MenuItem>
            </Link></>: 
              <MenuItem key={'sign out'} onClick={handleSignOut}>
                <Typography textAlign="center">{'sign out'}</Typography>
              </MenuItem>
            }
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          <Link to={'/'}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                home
              </Button>
              </Link>
          <Link to={'/doctors'}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                doctors
              </Button>
              </Link>

              {!isAuthenticated? <><Link to={'/signin'}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                sign in
              </Button>
              </Link>

              <Link to={'/signup'}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                signup
              </Button>
              </Link></>:
              <Button onClick={handleSignOut}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                sign out
              </Button>
              }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;