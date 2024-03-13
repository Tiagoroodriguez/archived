import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { BotonColor } from "../../components/BotonColor/BotonColor";
import './Contacto.css'


export function Contacto() {
    return(
        <>
        <Header />
        <section>
            <form action='post' className='contacto'>

                <div className='contacto-texto-container'>
                    <span>Envianos tu duda</span>
                </div>


                <div className='datos-container'>
                    <label>Correo electronico</label>
                    <input type='email' className='mail' />

                    <label>Asunto</label>
                    <input type='text' className='asunto' />

                    <label>Mensaje</label>
                    <textarea className='contenido'></textarea>
                </div>

                <BotonColor
                textoBoton='Enviar'
                linkBoton='#'
                />
            </form>
        </section>
        <Footer />
        </>
    )
}