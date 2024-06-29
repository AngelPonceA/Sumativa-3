import { obtenerAutos , obtenerAutosBusqueda} from './obtenerAutos.js';
import { crearTarjetasCarritoCompra } from './dibujaAutos.js';
import { validaAutos } from "./ValidaAutos.js";

function inicializacion() {
    const galeriaCarrito = localStorage.getItem("carrito-compra");
    crearTarjetasCarritoCompra(JSON.parse(galeriaCarrito));
}


inicializacion();