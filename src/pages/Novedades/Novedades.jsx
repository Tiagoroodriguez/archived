import { Producto } from '../../componets/Producto/Producto';
import { BotonColor } from '../../componets/BotonColor/BotonColor';
import './Novedades.css';

export function Novedades() {
    return (
        <section className='novedades-section'>
            <div className="mensaje-container">
                <span>"No somos una marca, somos un movimiento"</span>
            </div>

            <div className="novedades-container">
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

            <BotonColor
            textoBoton="Ver todos los productos"
            linkBoton="tienda"
            />

        </section>
    )
}