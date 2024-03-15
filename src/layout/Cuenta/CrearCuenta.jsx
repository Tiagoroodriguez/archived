import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { BotonColor } from "../../components/BotonColor/BotonColor";
import { Link } from 'react-router-dom';
import './CrearCuenta.css';


export function CrearCuenta() {
    return (
        <>
            <Header/>
            <section>
                <form action="post" className='crear-cuenta'>

                    <div className="texto-container">
                        <p>Comprá más rapido y llevá el control de tus pedidos</p>
                    </div>

                    
                    <div className="datos-container">
                        <label>Nombre y Apellido</label>
                        <input type="text" className="nombre-apellido" />

                        <label>Correo electrónico</label>
                        <input type='email' placeholder="ejemplo@gmail.com" className="mail" />

                        <label>Teléfono</label>
                        <input type="text" className="telefono" />

                        <label>Contraseña</label>
                        <input type="password" className="contraseña" />

                        <label>Repetir Contraseña</label>
                        <input type="password" className="contraseña-repetir" />
                    </div>

                    <BotonColor
                    textoBoton="Crear cuenta"
                    linkBoton="#"
                    />
                    <span>¿Ya tenés una cuenta? <Link to="/acount/login">Iniciá sesión</Link></span>
                    
                </form>
            </section>
            <Footer/>
        </>
        
    )
}