import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar id="navbar" position="static" sx={{bgcolor:"primary.dark", width:"100%"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link href="/" sx={{color:"white"}}>logo ira ici</Link>
            

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="black" component="a" href="/" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>Accueil</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="white" component="a" href="/actions" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>Actions</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="white" component="a" href="/parrainage" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>Parrainage</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="white" component="a" href="/quisommesnous" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>Qui sommes-nous</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="white" component="a" href="/admin" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>Espace admin</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{m:2}}>
                  <Typography color="white" component="a" href="/contact" textAlign="center" sx={{fontWeight:800, fontSize:"20px", textDecoration:"none"}}>Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"flex-end" }}>
            <Button
                  href="/"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Accueil
            </Button>
            <Button
                  href="/actions"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Actions
            </Button>
            <Button
                  href="/parrainage"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Parrainage
            </Button>
            <Button
                  href="quisommesnous"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Qui sommes-nous
            </Button>
            <Button
                  href="/admin"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Espace admin
            </Button>
            <Button
                  href="/contact"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Contact
            </Button>
            
            
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:"flex-end" }}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="third"
            >
              <MenuIcon  />
            </IconButton>
            </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;