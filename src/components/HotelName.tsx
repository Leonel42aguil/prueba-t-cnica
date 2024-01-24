import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import hotelImage from "../img/inicio.png";

const pages = ["Home", "Menu", "Eventos", "Servicios"];

function HotelWithNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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
    <AppBar
      position="static"
      sx={{
        backgroundImage: `url(${hotelImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: '100%', // Hace que el AppBar ocupe el 100% del ancho
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Jost",
              fontSize: "24px",
              fontWeight: 900,
              lineHeight: "45px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "inherit",
              textDecoration: "none",
              width: "97px",
              height: "45px",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 1,
                  color: "white",
                  position: "relative",
                  "&:hover": {
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "50%", // Centro de la palabra
                      transform: "translateX(-50%)", // Ajusta la posición horizontal al centro
                      bottom: "9px", // Ajusta la posición vertical
                      height: "1px",
                      width: "70%", // Ajusta el ancho de la línea
                      backgroundColor: "white",
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
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh", // 50% de la altura de la ventana
          backgroundSize: "cover", // Ajusta el tamaño de la imagen al contenedor
          backgroundPosition: "center", // Centra la imagen en el contenedor
        }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            fontFamily: "Jost",
            fontSize: "48px",
            fontWeight: 900,
            lineHeight: "65px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "white",
            margin: "auto", // Centra horizontalmente
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Sombra de texto para mejorar la legibilidad
            marginTop: '195px'          
          }}
        >
          Nombre del Hotel
        </Typography>
        <TextField
          label="Hacer reserva"
          variant="outlined"
          sx={{
            mt: "10px", // Agrega espacio entre el texto y el campo de entrada
            width: "330px", // Mismo ancho que el "Nombre del Hotel"
            height: "200px",
            "& input": {
              color: "black", // Establece el color del texto a negro
              backgroundColor: 'white', // Establece el fondo del input a blanco
              borderRadius: '12px', // Añade bordes redondeados al input
            },
          }}
        />
      </div>
    </AppBar>
  );
}

export default HotelWithNavBar;
