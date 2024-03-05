import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Tabla } from '../../components/Tabla/Tabla';
import './GuiaTalles.css';

export function GuiaTalles() {
    return(
        <>
            <Header />
            <section className='guia-container'>
                <Tabla 
                    producto={'Remera "Archived"'}
                    sAncho={"10"}
                    sLargo={"20"}

                    mAncho={"10"}
                    mLargo={"20"}

                    lAncho="10"
                    lLargo="20"

                    xlAncho={"10"}
                    xlLargo={"20"}
                />

                <Tabla 
                    producto={'Remera "Archived"'}
                    sAncho={"10"}
                    sLargo={"20"}

                    mAncho={"10"}
                    mLargo={"20"}

                    lAncho="10"
                    lLargo="20"

                    xlAncho={"10"}
                    xlLargo={"20"}
                />
            </section>

            <span className='mensaje-talles'>"Todas las medidas estan expresadas en centimetros"</span>
            <Footer />
        </>
    )
}