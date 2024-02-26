import './Producto.css';



export function Producto({nombreProducto, categoriaProducto, precioProducto, imagenProducto}) { 
    return (
        <div className="container">

            <div className="producto-imagen">
                <a href="#"><img src={`./src/assets/images/${imagenProducto}`} alt={`imagen del producto ${nombreProducto}`} /></a>
            </div>

            <div className="producto-informacion">
                <a href="#"><span className='producto-nombre'>{`"${nombreProducto}"`}</span></a>
                <a href="#"><span className='producto-categoria'>{categoriaProducto}</span></a>
                <a href="#"><span className='producto-precio'>{`$${precioProducto}`}</span></a>
            </div>
        </div>
    )
}