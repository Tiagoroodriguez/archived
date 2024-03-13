import './NotFound.css';
import { Header } from "../../components/Header/Header";
import { Footer } from '../../components/Footer/Footer';

export function NotFount() {
    return(
        <>
        <Header/>
        <div className="container-404">
            <span>Error 404</span>
            <p>La pagina que deseas ingresar no existe</p>
        </div>
        <Footer/>
        </>

        
    )
}