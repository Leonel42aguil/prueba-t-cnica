import React from "react";
import { AppBar, CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar";
import HotelName from "./components/HotelName";
import hotelImage from "./img/Hotel.jpg"; // Asegúrate de poner la ruta correcta
import Recomendaciones from "./components/Recomendaciones";
import HabitacionesHotel from "./components/HabitacionesHotel";
import Servicios from "./components/Servicios";
import Eventos from "./components/Eventos";
import Footer from "./components/Footer";

export default function App() {
  // Eliminado el uso de estilos directos en línea

  return (
    <AppBar position="static" sx={{backgroundColor: 'white'}}>
      {/* <NavBar />  */}
      <HotelName />
      <Recomendaciones />
      <HabitacionesHotel />
      <Eventos />
      <Servicios />
      <Footer />
      <CssBaseline />
    </AppBar>
  );
}
