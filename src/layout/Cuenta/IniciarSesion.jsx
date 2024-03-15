import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { BotonColor } from "../../components/BotonColor/BotonColor";
import { Link } from 'react-router-dom';
import './IniciarSesion.css';


export function IniciarSesion() {
    return (
        <>
            <Header/>
            <section>
                <form action="post" className='iniciar-sesion'>
                    
                    <div className="datos-container">
                    
                        <label>Correo electrónico</label>
                        <input type='email' className="mail" />

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