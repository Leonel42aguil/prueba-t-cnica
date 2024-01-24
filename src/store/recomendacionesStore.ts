import create from 'zustand';
import defaultImagePath from "../img/Hotel.jpg";
import defaultImagePathhh from "../img/livin.webp";
import biffe from "../img/recomendaciones/almuerzo/biffe.png";
import ensalada from "../img/recomendaciones/almuerzo/ensalada.png";
import lasaña from "../img/recomendaciones/almuerzo/lasaña.png";
import burrito from "../img/recomendaciones/almuerzo/burrito.webp";
import fideos from "../img/recomendaciones/almuerzo/fideos.jpg";
import pescado from "../img/recomendaciones/almuerzo/pescado.png";
import frutas from "../img/recomendaciones/desayuno/frutas.png";
import huevo from "../img/recomendaciones/desayuno/huevo.png";
import omelet from "../img/recomendaciones/desayuno/omelet.png";
import jugo from "../img/recomendaciones/desayuno/jugo.jpg";
import factura from "../img/recomendaciones/desayuno/factura.jpg";
import kiwi from "../img/recomendaciones/postres/kiwi.png";
import helado from "../img/recomendaciones/postres/helado.png";
import cereza from "../img/recomendaciones/postres/cereza.png";
import postre from "../img/recomendaciones/postres/postre.png";
import wafles from "../img/recomendaciones/postres/wafles.png";
import bebida1 from "../img/recomendaciones/bebidas/bebida 1.jpg";
import bebida2 from "../img/recomendaciones/bebidas/bebida 2.jpg";
import bebida3 from "../img/recomendaciones/bebidas/bebida 3.png";
import bebida4 from "../img/recomendaciones/bebidas/bebida 4.png";
import bebida5 from "../img/recomendaciones/bebidas/bebida 5.png";
import guiso from "../img/recomendaciones/cena/guiso.png";
import cena from "../img/recomendaciones/cena/cena 1.jpg";
import picada from "../img/recomendaciones/cena/picada.jpg";
import pizza from "../img/recomendaciones/cena/pizza.png";
import pollo from "../img/recomendaciones/cena/pollo.png";
import habitaciones from "../img/recomendaciones/almuerzo/biffe.png";


interface Recomendacion {
  id: number;
  nombre: string;
  image: string;
  precio: string;
}

interface Habitacion {
  id: number;
  nombre: string;
  descripcion: string;
  image: string;
}

interface RecomendacionesStore {
  almuerzo: Recomendacion[];
  desayuno: Recomendacion[]; 
  postre: Recomendacion[];
  bebidas: Recomendacion[];
  cena: Recomendacion[];
  habitaciones: Habitacion[];
}

export const useRecomendacionesStore = create<RecomendacionesStore>((set) => ({
  almuerzo: [{ id: 1, nombre: 'Almuerzo 1', image: biffe, precio: '$10.99' },
  { id: 3, nombre: 'Almuerzo 22', image: ensalada, precio: '$12.99' },
  { id: 4, nombre: 'Almuerzo 33', image: lasaña, precio: '$10.99' },  
  { id: 5, nombre: 'Almuerzo 2', image: burrito, precio: '$12.99' }, 
  { id: 6, nombre: 'Almuerzo 1999', image: fideos, precio: '$112.99' }, 
  { id: 7, nombre: 'Almuerzo 2', image: pescado, precio: '$12.99' }],

  desayuno: [{ id: 8, nombre: 'Desayuno 13', image: frutas, precio: '$7.99' },
  { id: 9, nombre: 'Desayuno 18', image: huevo, precio: '$7.99' },
  { id: 10, nombre: 'Desayuno 11', image: omelet, precio: '$7.99' },  
  { id: 11, nombre: 'Almuerzo 2', image: jugo, precio: '$12.99' }, 
  { id: 12, nombre: 'Almuerzo 2', image: factura, precio: '$12.99' }],

  postre: [  { id: 13, nombre: 'Almuerzo 23', image: wafles, precio: '$12.99' },   
  { id: 14, nombre: 'Almuerzo 2', image: cereza, precio: '$12.99' },   
  { id: 15, nombre: 'Almuerzo 102', image: postre, precio: '$12.99' },  
  { id: 16, nombre: 'Almuerzo 2', image: helado, precio: '$12.99' },  
  { id: 17, nombre: 'Almuerzo 221', image: kiwi, precio: '$12.99' }],

  bebidas: [  { id: 18, nombre: 'Almuerzo 218', image: bebida1, precio: '$12.99' },  
  { id: 19, nombre: 'Almuerzo 122', image: bebida2, precio: '$12.99' },  
  { id: 20, nombre: 'Almuerzo 352', image: bebida3, precio: '$12.99' },  
  { id: 21, nombre: 'Almuerzo 2', image: bebida4, precio: '$12.99' }, 
  { id: 22, nombre: 'Almuerzo 227', image: bebida5, precio: '$12.99' }],

  cena: [
    { id: 23, nombre: 'Cena 111', image: pollo, precio: '$18.99' },
    { id: 24, nombre: 'Cena 222', image: picada, precio: '$20.99' },
    { id: 25, nombre: 'Cena 341', image: pizza, precio: '$22.99' },
    { id: 26, nombre: 'Cena 325', image: cena, precio: '$22.99' },
    { id: 27, nombre: 'Cena 4311', image: guiso, precio: '$22.99' },
  ],
  habitaciones: [
    { id: 28, nombre: 'Habitación normal', descripcion: 'Tu refugio en nuestro hotel: cama cómoda, tonos suaves, escritorio funcional y detalles modernos. ¡Relájate y disfruta de tu estancia!', image: habitaciones },
    { id: 29, nombre: 'Habitación Moderna', descripcion: 'Diseño vanguardista, mobiliario de tecnología, ciudades elegantes te esperan. ¡Disfruta de la estancia!', image: defaultImagePath },
    { id: 30, nombre: 'Habitación Vip', descripcion: 'Lujo se encuentra con tecnología, mobiliario de diseño, comodidades y vistas impresionantes. Disfruta de un servicio personalizado.', image: defaultImagePathhh },
  ],
}));
