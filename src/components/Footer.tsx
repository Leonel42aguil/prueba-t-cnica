import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#AE9672', color: 'white', py: 4, marginTop: '80px' }}>
      <Container>
        <Grid container spacing={3}>

          {/* Sección Logo y About Us */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Hotel Paradise</Typography>
            <Typography>
              Acerca de nosotros<br />
              Bienvenido a Hotel Paradise, donde la comodidad se encuentra con la elegancia. Descubre la experiencia única de hospedarte con nosotros. Ofrecemos un ambiente cálido y acogedor para que disfrutes de tus momentos especiales.
            </Typography>
          </Grid>

          {/* Sección Información y Derechos de autor */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">2023 Hotel Paradise</Typography>
            <Typography>Todos los derechos reservados</Typography>
          </Grid>

          {/* Sección Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6">Enlaces Rápidos</Typography>
            <Typography>
              <Link href="#">Términos y condiciones</Link>
              <br />
              <Link href="#">Políticas de privacidad</Link>
              <br />
              <Link href="#">Seguridad</Link>
            </Typography>
          </Grid>

          {/* Sección Contacto */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6">Contacto</Typography>
            <IconButton color="inherit" aria-label="Cerrar">
              <CloseIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <Typography variant="body2">info@hotelparadise.com</Typography>
          </Grid>
        </Grid>

        {/* Divider para separar las secciones */}
        <Divider sx={{ my: 3 }} />

        {/* Sección de Derechos de autor */}
        <Typography align="center" variant="body2">
          © 2023 Hotel Paradise. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
