import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import './DetalleProducto.css'


export function DetalleProducto() {
    return(
        <>
        <Header />
        <section className="section-dc">         
            <div className="detalle-container">

                <div className="img-container">
                    <div className="img"></div>
                    <div className="img"></div>
                    <div className="img"></div>
                    <div className="img"></div>
                </div>

                <div className="informacion-container">
                    <div className="informacion">
                        <span className="nombre-producto">Nombre del producto</span>
                        <span className="precio-producto">$00.000</span>
                    </div>

                    <div className="division"></div>

                    <div className="talles">
                        <span className="talle-seleccionado">Talle: X</span>
                        <div className="talles-container">
                            <button className="boton-talle">S</button>
                            <button className="boton-talle">M</button>
                            <button className="boton-talle">L</button>
                            <button className="boton-talle">XL</button>
                        </div>
                    </div>

                    <div className="cantiadad">
                        <span className="cantidad-text">Cantidad</span>
                        <input type="text"></input>
                    </div>

                    <button className="agregar-carrito">
                        <Link to="#">Agregar al carrito</Link>
                    </button>
                </div>
                
            </div>
        </section>
        <Footer />
        </>
    )
}