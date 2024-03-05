import { Link } from "react-router-dom";
import { Footer } from "../../componets/Footer/Footer";
import { Header } from "../../componets/Header/Header";
import { Producto } from '../../componets/Producto/Producto';
import { BotonNormal } from '../../componets/BotonNormal/BotonNormal';
import './Tienda.css';

export function Tienda() {
    return (
        <>
            <Header/>      
            <main>
            
                <section className='tienda'>

                    <div className="mensaje-container">
                        <span>"No somos una marca, somos un movimiento"</span>
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
            </main>
            <Footer/>  
        </>
    )
}