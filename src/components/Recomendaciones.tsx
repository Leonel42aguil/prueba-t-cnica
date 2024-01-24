import * as React from 'react';
import { useState } from 'react';
import {
  useRecomendacionesStore,
  // RecomendacionItem,
} from '../store/recomendacionesStore';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Container,
  Button,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


// Componente Slider simple para navegar entre tarjetas
const SimpleSlider: React.FC<{ items: JSX.Element[] }> = ({ items }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const visibleItems = Array.from({ length: 3 }, (_, i) => items[(startIndex + i) % items.length]);

  return (
    <Box>
      {items.length > 0 && (
        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Button onClick={handlePrev}>
            <KeyboardArrowLeftIcon />
          </Button>
          <Button onClick={handleNext}>
            <KeyboardArrowRightIcon />
          </Button>
        </Box>
      )}
      <Grid container spacing={2} justifyContent="center">
        {visibleItems.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            {item}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


// Definir el componente Recomendaciones
const Recomendaciones: React.FC = () => {
  // Obtener los estados globales de Zustand
  const almuerzo = useRecomendacionesStore((state) => state.almuerzo);
  const desayuno = useRecomendacionesStore((state) => state.desayuno);
  const postre = useRecomendacionesStore((state) => state.postre);
  const bebidas = useRecomendacionesStore((state) => state.bebidas);
  const cena = useRecomendacionesStore((state) => state.cena);

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          padding: '1rem',
          width: '378px',
          height: '95px',
          fontFamily: 'Jost',
          fontSize: '30px',
          fontWeight: 500,
          lineHeight: '45px',
          letterSpacing: '0em',
          textAlign: 'center', // Alineación centrada
          margin: 'auto', // Margen automático
          marginTop: '80px'
        }}
      >
        Tus Recomendaciones
      </Typography>

      {/* Sección Almuerzo */}
      <Container
        sx={{
          width: '888px',
          height: '439px',
          padding: '16px',
          borderRadius: '20px',
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
        {/* Seccion Almuerzo */}
        <CardContent sx={{ backgroundColor: 'white'}}>
          <Typography variant="h6" gutterBottom align="center" sx={{ color: '#000', fontFamily: 'Jost', fontSize: '35px', fontStyle: 'normal', lineHeight: 'normal' , marginBottom: '24px', marginLeft: '-650px', }}>
            Almuerzos
          </Typography>
          <SimpleSlider
            items={almuerzo.map((item) => ( 
              <Card key={item.nombre} sx={{  }}>
                <CardMedia component="img" image={item.image} alt={item.nombre} sx={{ height:"160px", display: 'flex', padding: '16px', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '34px' }} />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    {item.nombre}
                  </Typography>
                  <Typography align="center" sx={{color: '#000', fontSize: '20px'}}>{item.precio}</Typography>
                </CardContent>
              </Card>
            ))}
          />
        </CardContent>
      </Container>

   {/* <br />
   <br />
   <br />
   <br /> */}
      {/* Sección Desayuno */}
      <Container   sx={{
          width: '888px',
          height: '439px',
          padding: '16px',
          borderRadius: '20px',
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
        }}>
        <CardContent sx={{ backgroundColor: 'white'}}>
          <Typography variant="h6" gutterBottom align="center" sx={{ color: '#000', fontFamily: 'Jost', fontSize: '35px', fontStyle: 'normal', lineHeight: 'normal' , marginBottom: '24px', marginLeft: '-650px', }}>
            Desayuno
          </Typography>
          <SimpleSlider
            items={desayuno.map((item) => (
              <Card key={item.nombre}>
                <CardMedia component="img" image={item.image} alt={item.nombre} sx={{ height:"160px", display: 'flex', padding: '16px', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '34px' }} />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    {item.nombre}
                  </Typography>
                  <Typography align="center">{item.precio}</Typography>
                </CardContent>
              </Card>
            ))}
          />
        </CardContent>
      </Container>

      {/* Sección Postre */}
      <Container   sx={{
          width: '888px',
          height: '439px',
          padding: '16px',
          borderRadius: '20px',
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
        }}>
        <CardContent sx={{ backgroundColor: 'white'}}>
          <Typography variant="h6" gutterBottom align="center"sx={{ color: '#000', fontFamily: 'Jost', fontSize: '35px', fontStyle: 'normal', lineHeight: 'normal' , marginBottom: '24px', marginLeft: '-650px', }}>
            Postre
          </Typography>
          <SimpleSlider
            items={postre.map((item) => (
              <Card key={item.nombre}>
                <CardMedia component="img" image={item.image} alt={item.nombre} sx={{ height:"160px", display: 'flex', padding: '16px', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '34px' }} />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    {item.nombre}
                  </Typography>
                  <Typography align="center">{item.precio}</Typography>
                </CardContent>
              </Card>
            ))}
          />
        </CardContent>
      </Container>

      {/* Sección Bebidas */}
      <Container   sx={{
          width: '888px',
          height: '439px',
          padding: '16px',
          borderRadius: '20px',
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
        }}>
        <CardContent sx={{ backgroundColor: 'white'}}>
          <Typography variant="h6" gutterBottom align="center" sx={{ color: '#000', fontFamily: 'Jost', fontSize: '35px', fontStyle: 'normal', lineHeight: 'normal' , marginBottom: '24px', marginLeft: '-650px', }}>
            Bebidas
          </Typography>
          <SimpleSlider
            items={bebidas.map((item) => (
              <Card key={item.nombre}>
                <CardMedia component="img" image={item.image} alt={item.nombre} sx={{ height:"160px", display: 'flex', padding: '16px', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '34px' }} />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    {item.nombre}
                  </Typography>
                  <Typography align="center">{item.precio}</Typography>
                </CardContent>
              </Card>
            ))}
          />
        </CardContent>
      </Container>

      {/* Sección Cena */}
      <Container   sx={{
          width: '888px',
          height: '439px',
          padding: '16px',
          borderRadius: '20px',
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
        }}>
        <CardContent sx={{ backgroundColor: 'white'}}>
          <Typography variant="h6" gutterBottom align="center" sx={{ color: '#000', fontFamily: 'Jost', fontSize: '35px', fontStyle: 'normal', lineHeight: 'normal' , marginBottom: '24px', marginLeft: '-650px', }}>
            Cena
          </Typography>
          <SimpleSlider
            items={cena.map((item) => (
              <Card key={item.nombre}>
                <CardMedia component="img" image={item.image} alt={item.nombre} sx={{ height:"160px", display: 'flex', padding: '16px', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '34px' }} />
                <CardContent>
                  <Typography variant="h6" gutterBottom align="center">
                    {item.nombre}
                  </Typography>
                  <Typography align="center">{item.precio}</Typography>
                </CardContent>
              </Card>
            ))}
          />
        </CardContent>
      </Container>
    </Box>
  );
};

export default Recomendaciones;
