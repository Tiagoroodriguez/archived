import './Producto.css';
import { Link } from "react-router-dom";



export function Producto({nombreProducto, categoriaProducto, precioProducto, imagenProducto}) { 
    return (
        <article className="container">

            <div className="producto-imagen">
                <Link to="/detalle-producto">
                    <img src={`/images/${imagenProducto}`} alt={`imagen del producto ${nombreProducto}`} />
                </Link>
                <div className="descuento-container">
                    <span className='descuento'>10%</span>
                </div>
            </div>

            <div className="producto-informacion">
                <Link to="/detalle-producto" className='producto-nombre'>{`"${nombreProducto}"`}</Link>
                <Link to="/detalle-producto" className='producto-categoria'>{categoriaProducto}</Link>
                <Link to="/detalle-producto" className='producto-precio'>{`$${precioProducto}`}</Link>
            </div>
        </article>
    )
}