import React from 'react';
import { Typography, Box, Card, CardContent, Grid, CardMedia, Container } from '@mui/material';
import fiesta from "../img/eventos/fiesta.jpg";
import vino from "../img/eventos/vino.jpg";

// Definir el componente Eventos 
const Eventos: React.FC = () => {
  const eventos = [
    { nombre: 'Concierto', genero: 'pop', image: fiesta },
    { nombre: 'Wine Night', genero: 'pop', image: vino },
    { nombre: 'Concierto', genero: 'electronica', image: fiesta },
  ];

  return (
    <Box sx={{ marginTop: '80px' }}>
      <Typography
        variant="h6" gutterBottom align="center"
        sx={{ color: '#000', fontFamily: 'Jost', fontSize: '35px', fontStyle: 'normal', lineHeight: 'normal', marginBottom: '24px', marginLeft: '-650px', }}
      >
        Eventos
      </Typography>

      {/* Sección Eventos */}
      <Container
        sx={{
          width: '888px',
          padding: '16px',
          gap: '24px',
          background: 'white',
          boxShadow: '0px 2.767256498336792px 2.2138051986694336px 0px #AE967205',
          '&:hover': {
            boxShadow: '0px 6.650102138519287px 5.32008171081543px 0px #AE967207',
          },
          '&:active': {
            boxShadow: '0px 12.521552085876465px 10.017241477966309px 0px #AE967209',
          },
          '&:focus': {
            boxShadow: '0px 22.3363094329834px 17.869047164916992px 0px #AE96720B',
          },
          '&:focus-visible': {
            boxShadow: '0px 41.777610778808594px 33.422088623046875px 0px #AE96720D',
          },
          '&:focus-within': {
            boxShadow: '0px 100px 80px 0px #AE967212',
          },
        }}
      >
        <CardContent sx={{ backgroundColor: 'white' }}>
          <Grid container spacing={2} justifyContent="center">
            {eventos.map((item) => (
              <Grid key={item.nombre} item xs={12} sm={6} md={4}>
                <Card sx={{ position: 'relative', width: '210px', height: '337px' }}>
                  <CardMedia component="img" image={item.image} alt={item.nombre} sx={{ width: '100%', height: 'auto' }} />
                  <CardContent sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#FFF', fontFamily: 'Jost', fontSize: '25px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }}>
                      {item.nombre}
                    </Typography>
                    <Typography color="textSecondary" sx={{ color: '#FFF', textAlign: 'center', fontFamily: 'Jost', fontSize: '16px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>
                      Fecha <br /> hora
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Container>
    </Box>
  );
};

export default Eventos;
