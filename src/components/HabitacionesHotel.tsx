import React from 'react';
import { Card, CardContent, CardMedia, Container, Typography, Box, IconButton, Button } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { useRecomendacionesStore } from '../store/recomendacionesStore';

const HabitacionesHotel: React.FC = () => {
  // Obtén las habitaciones del estado global
  const habitaciones = useRecomendacionesStore((state) => state.habitaciones);

  // Estado local para rastrear el índice actual del slider
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Maneja el cambio al siguiente índice del slider
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % habitaciones.length);
  };

  // Maneja el cambio al índice anterior del slider
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + habitaciones.length) % habitaciones.length);
  };

  const currentHabitacion = habitaciones[currentIndex];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#AE9672',
        marginTop: '80px',
        height: '366px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
          borderRadius: '20px',
          boxShadow: '0px 2.767256498336792px 2.2138051986694336px 0px #AE967205',
          position: 'relative',
          margin: 'auto', // Centra el contenedor en la pantalla
        }}
      >
        <Box sx={{ width: '20%', display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handlePrev} sx={{ color: 'white', fontSize: '40px', marginRight: '-8px' }}>
            <NavigateBefore />
          </IconButton>
        </Box>

        <Box sx={{ width: '428px', height: '286px', position: 'relative', marginRight: '20px' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="img"
              height="286"
              sx={{
                width: '428px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
              src={currentHabitacion?.image}
              alt={currentHabitacion?.nombre}
            />
          </Card>
        </Box>

        <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleNext} sx={{ color: 'white', fontSize: '40px', marginLeft: '-8px' }}>
            <NavigateNext />
          </IconButton>
        </Box>

        <Box sx={{ width: '40%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ textAlign: 'left', color: 'black' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#FFF', fontFamily: 'Inter', fontSize: '31px' }}>
              {currentHabitacion?.nombre}
            </Typography>
            <Typography sx={{ textAlign: 'justify', fontFamily: 'Inter', fontSize: '23px', marginTop: '16px', color: '#FFF', letterSpacing: '0px' }}>
              {currentHabitacion?.descripcion}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: '16px',
              display: 'flex',
              width: '359px',
              padding: '8px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '10px',
              background: '#FFF',
              '&:hover': {
                background: '#FFF',  // Mantén el fondo igual para que no cambie en hover
              },
            }}
          >
            <Typography
              sx={{
                color: '#AE9672',
                textAlign: 'justify',
                fontFamily: 'Inter',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
              }}
            >
              Hacer Reservación
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HabitacionesHotel;
