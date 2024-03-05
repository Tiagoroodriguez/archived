import { Footer } from "../../componets/Footer/Footer";
import { Header } from "../../componets/Header/Header";
import { BotonColor } from "../../componets/BotonColor/BotonColor";
import { Link } from 'react-router-dom';
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

                    <BotonColor
                    textoBoton="Iniciar Sesión"
                    linkBoton="#"
                    />
                    <span>¿No tenés cuenta? <Link to="/acount/register">Crear cuenta</Link></span>
                    
                </form>
            </section>
            <Footer/>
        </>
        
    )
}