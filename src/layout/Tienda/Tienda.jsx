//import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Producto } from '../../components/Producto/Producto';
import { BotonNormal } from '../../components/BotonNormal/BotonNormal';
import { InformacionEnvios } from "../../components/InformacionEnvios/InformacionEnvios";

import './Tienda.css';

export function Tienda() {
    return (
        <>
            <Header/>      
            <main>
                <section className='tienda'>

                    <div className="mensaje-container">
                        <span>LA CALIDAD NO TIENE PRECIO, PERO SI NOMBRE</span>
                    </div>

                    <nav className="tienda-filtros">
                        <BotonNormal
                        textoBoton="Todos los productos"
                        linkBoton="#"
                        />
                        <BotonNormal
                        textoBoton="Archived Collection"
                        linkBoton="#"
                        />
                        <BotonNormal
                        textoBoton="444 Collection"
                        linkBoton="#"
                        />
                    </nav>

                    <div className="productos-container">
                        <Producto 
                        nombreProducto="Destroy" 
                        categoriaProducto="Remera oversize"
                        precioProducto={"20.000"}
                        imagenProducto="download.webp"
                        />

                        <Producto 
                        nombreProducto="Archived" 
                        categoriaProducto="Remera oversize"
                        precioProducto={"40.000"}
                        imagenProducto="download.webp"
                        />

                        <Producto 
                        nombreProducto="Lover" 
                        categoriaProducto="Remera oversize"
                        precioProducto={"10.000"}
                        imagenProducto="download.webp"
                        />
                        <Producto 
                        nombreProducto="Destroy" 
                        categoriaProducto="Remera oversize"
                        precioProducto={"20.000"}
                        imagenProducto="download.webp"
                        />

                        <Producto 
                        nombreProducto="Archived" 
                        categoriaProducto="Remera oversize"
                        precioProducto={"40.000"}
                        imagenProducto="download.webp"
                        />

                        <Producto 
                        nombreProducto="Lover" 
                        categoriaProducto="Remera oversize"
                        precioProducto={"10.000"}
                        imagenProducto="download.webp"
                        />
                        
                    </div>
                </section>
                <InformacionEnvios />
            </main>
            <Footer/>  
        </>
    )
}