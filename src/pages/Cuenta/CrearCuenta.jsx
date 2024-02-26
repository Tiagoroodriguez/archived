import { Footer } from "../../componets/Footer/Footer";
import { Header } from "../../componets/Header/Header";
import './CrearCuenta.css';


export function CrearCuenta() {
    return (
        <>
            <Header/>
            <section>
                <form action="post" className='crear-cuenta'>

                    <div className="texto-container">
                        <span>Comprá más rapido y llevá el control de tus pedidos</span>
                    </div>

                    
                    <div className="datos-container">
                        <label>Nombre y Apellido</label>
                        <input type="text" className="nombre-apellido" />

                        <label>Correo electronico</label>
                        <input type="text" className="mail" />

                        <label>Telefono</label>
                        <input type="text" className="telefono" />

                        <label>Contraseña</label>
                        <input type="password" className="contraseña" />

                        <label>Repetir Contraseña</label>
                        <input type="password" className="contraseña-repetir" />
                    </div>

                    <div className="boton-container">
                        <div className="boton-crear-cuenta">
                            <a href="#">Crear cuenta</a>
                        </div>
                        <span>¿Ya tenés una cuenta? <a href="">Iniciá sesión</a></span>
                    </div>
                    
                </form>
            </section>
            <Footer/>
        </>
        
    )
}