import { Footer } from '../../componets/Footer/Footer';
import { Header } from '../../componets/Header/Header';
import { Tabla } from '../../componets/Tabla/Tabla';
import './GuiaTalles.css';

export function GuiaTalles() {
    return(
        <>
            <Header />
            <div className='guia-container'>
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
            </div>

            <span className='mensaje-talles'>"Todas las medidas estan expresadas en centimetros"</span>
            <Footer />
        </>
    )
}