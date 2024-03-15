//import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Producto } from '../../components/Producto/Producto';
import { BotonNormal } from '../../components/BotonNormal/BotonNormal';
import { InformacionEnvios } from "../../components/InformacionEnvios/InformacionEnvios";

import './Tienda.css';

const productos = [
    { 
        id: 1,
        nombre: "Destroy", 
        categoria: "Remera oversize", 
        precio: "20.000", 
        cantindad: 5,
        descuento: 0,
        coleccion: "Archived Collection",
        imagen: "download.webp" 
    },
    { 
        id: 2,
        nombre: "Archived", 
        categoria: "Remera oversize", 
        precio: "40.000", 
        cantindad: 5,
        descuento: 0,
        coleccion: "Archived Collection", 
        imagen: "download.webp" 
    },
    { 
        id: 3,
        nombre: "Lover", 
        categoria: "Remera oversize", 
        precio: "10.000", 
        cantindad: 5,
        descuento: 0,
        coleccion: "Archived Collection", 
        imagen: "download.webp" 
    },
    { 
        id: 4,
        nombre: "Destini", 
        categoria: "Remera oversize", 
        precio: "50.000", 
        cantindad: 5,
        descuento: 0,
        coleccion: "Archived Collection", 
        imagen: "download.webp" 
    },
    { 
        id: 5,
        nombre: "Invertion", 
        categoria: "Remera oversize", 
        precio: "15.000", 
        cantindad: 5,
        descuento: 0,
        coleccion: "444 Collecion", 
        imagen: "download.webp" 
    },
    
  ];
  
export function Tienda() {
    return (
        <>
            <Header/>      
            <main>
                <section className='tienda'>

                    <div className="mensaje-container">
                        <p>LA CALIDAD NO TIENE PRECIO, PERO SI NOMBRE</p>
                    </div>

                    <nav className="tienda-filtros">
                        <BotonNormal
                        textoBoton="Todos los productos"
                        />
                        <BotonNormal
                        textoBoton="Archived Collection"
                        />
                        <BotonNormal
                        textoBoton="444 Collection"
                        />
                    </nav>

                    <div className="productos-container">
                        {productos.map((producto) => (
                            <Producto key={producto.id}
                                nombreProducto={producto.nombre} 
                                categoriaProducto={producto.categoria}
                                precioProducto={producto.precio}
                                imagenProducto={producto.imagen}
                            />
                        ))}
                        
                    </div>
                </section>
                <InformacionEnvios />
            </main>
            <Footer/>  
        </>
    )
}