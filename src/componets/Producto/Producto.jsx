import './Producto.css';
import { Link } from "react-router-dom";



export function Producto({nombreProducto, categoriaProducto, precioProducto, imagenProducto}) { 
    return (
        <div className="container">

            <div className="producto-imagen">
                <a href="#"><img src={`./src/assets/images/${imagenProducto}`} alt={`imagen del producto ${nombreProducto}`} /></a>
            </div>

            <div className="producto-informacion">
                <Link to="#" className='producto-nombre'>{`"${nombreProducto}"`}</Link>
                <Link to="#" className='producto-categoria'>{categoriaProducto}</Link>
                <Link to="#" className='producto-precio'>{`$${precioProducto}`}</Link>
            </div>
        </div>
    )
}