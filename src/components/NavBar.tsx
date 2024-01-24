import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'; 
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ['Home', 'Menu', 'Eventos', 'Servicios'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'red' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Jost',
              fontSize: '24px',
              fontWeight: 900,
              lineHeight: '45px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: 'inherit',
              textDecoration: 'none',
              width: '97px',
              height: '45px',
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 1,
                  color: 'white',
                  position: 'relative',
                  '&:hover': {
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: '50%', // Centro de la palabra
                      transform: 'translateX(-50%)', // Ajusta la posición horizontal al centro
                      bottom: '9px', // Ajusta la posición vertical
                      height: '1px',
                      width: '70%', // Ajusta el ancho de la línea
                      backgroundColor: 'white',
                    },
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open user menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* Eliminé el mapeo de settings y agregué solo un ícono de usuario */}
              <MenuItem onClick={handleCloseUserMenu}>
                <Avatar alt="User" src="/static/images/avatar/user.jpg" />
                <Typography ml={1}>Profile</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
