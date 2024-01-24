import React from 'react';
import { Typography, Box, Card, CardContent, Grid, CardMedia, Container, Button } from '@mui/material';
import piscina from "../img/servicios/piscina.png";
import spa from "../img/servicios/spa.png";
import sauna from "../img/servicios/sauna.png";
import discoteca from "../img/servicios/discoteca.png";
import gym from "../img/servicios/gym.png";
import animaciones from "../img/servicios/animaciones.png";
import trasporte from "../img/servicios/trasporte.png";
import desayuno from "../img/servicios/desayuno.png";

// Definir el componente Servicios
const Servicios: React.FC = () => {
  const servicios = [
    { nombre: 'Spa', image: spa },
    { nombre: 'Piscina', image: piscina },
    { nombre: 'Sauna', image: sauna },
    { nombre: 'Discoteca', image: discoteca },
    { nombre: 'Gym', image: gym },
    { nombre: 'Animacion', image: animaciones },
    { nombre: 'Trasporte', image: trasporte },
    { nombre: 'Desayuno', image: desayuno },
  ];

  return (
    <Box sx={{ marginTop: '80px' }}>
      <Typography
        variant="h6" gutterBottom align="center"
        sx={{ color: '#000', fontFamily: 'Jost', fontSize: '35px', fontStyle: 'normal', lineHeight: 'normal', marginBottom: '24px', marginLeft: '-650px', }}
      >
        Servicios
      </Typography>

      {/* Sección Servicios */}
      <Container
        sx={{
          width: '888px',
          padding: '16px',
          gap: '24px',
          background: 'white',
        }}
      >
        <CardContent sx={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px', gap: '71px' }}>
          <Grid container spacing={2} justifyContent="center">
            {servicios.map((item) => (
              <Grid key={item.nombre} item xs={12} sm={6} md={3}>
                <Card sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '16px',
                  borderRadius: '20px',
                  background: '#FFF',
                  boxShadow: '0px 2.767px 2.214px 0px rgba(174, 150, 114, 0.02), 0px 6.65px 5.32px 0px rgba(174, 150, 114, 0.03), 0px 12.522px 10.017px 0px rgba(174, 150, 114, 0.04), 0px 22.336px 17.869px 0px rgba(174, 150, 114, 0.04), 0px 41.778px 33.422px 0px rgba(174, 150, 114, 0.05), 0px 100px 80px 0px rgba(174, 150, 114, 0.07)',
                }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.nombre}
                    sx={{
                      width: '134px',
                      height: '134px',
                      borderRadius: '134px',
                      background: `url(${item.image}), lightgray 50% / cover no-repeat`,
                      marginTop: '16px',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom align="center">
                      {item.nombre}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* Agrega el texto "Clasifica tu experiencia" con los estilos especificados */}
          <Typography
            variant="h6" gutterBottom align="center"
            sx={{
              color: '#AE9672',
              fontFamily: 'Jost',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              marginTop: '24px', // Ajusta la distancia entre el texto y las cards
            }}
          >
            Clasifica tu experiencia
          </Typography>
          {/* Agrega el botón "Clasifica" sin estilos de hover */}
          <Button
            variant="contained"
            sx={{
              display: 'flex',
              width: '338px',
              padding: '8px 16px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '10px',
              background: '#000',
              boxShadow: 'none', // Elimina el shadow en hover
              '&:hover': {
                backgroundColor: '#000', // Mantiene el fondo igual en hover
              },
            }}
          >
            Clasifica
          </Button>
        </CardContent>
      </Container>
    </Box>
  );
};

export default Servicios;
