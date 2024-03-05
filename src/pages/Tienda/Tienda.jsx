import { Link } from "react-router-dom";
import { Footer } from "../../componets/Footer/Footer";
import { Header } from "../../componets/Header/Header";
import { Producto } from '../../componets/Producto/Producto';
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
                        <i className="bi bi-caret-right"></i><Link to="#">Todos los productos</Link>
                        <i className="bi bi-caret-right"></i><Link to="#">222 Collection</Link>
                        <i className="bi bi-caret-right"></i><Link to="#">Exclusive Collection</Link>
                        <i className="bi bi-caret-right"></i><Link to="#">Exclusive Collection</Link>
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