import { Producto } from '../../componets/Producto/Producto';
import './Novedades.css';

export function Novedades() {
    return (
        <section className='tienda'>
            <div className="mensaje-container">
                <span>"No somos una marca, somos un movimiento"</span>
            </div>

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
                
            </div>

            <div className="boton-container">
                <div className="boton-todos-productos">
                    <a href="#">Ver todos los productos</a>
                </div>
            </div>

        </section>
    )
}