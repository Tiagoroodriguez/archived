import { Footer } from "../../componets/Footer/Footer";
import { Header } from "../../componets/Header/Header";
import './IniciarSesion.css';


export function IniciarSesion() {
    return (
        <>
            <Header/>
            <section>
                <form action="post" className='iniciar-sesion'>
                    
                    <div className="datos-container">
                    
                        <label>Correo electronico</label>
                        <input type="text" className="mail" />

                        <label>Contraseña</label>
                        <input type="password" className="contraseña" />

                    </div>

                    <div className="boton-container">
                        <div className="boton-crear-cuenta">
                            <a href="#">Iniciar Sesión</a>
                        </div>
                        <span>¿No tenés cuenta? <a href="">Crear cuenta</a></span>
                    </div>
                    
                </form>
            </section>
            <Footer/>
        </>
        
    )
}