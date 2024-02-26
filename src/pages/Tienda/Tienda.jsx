import { Footer } from "../../componets/Footer/Footer";
import { Header } from "../../componets/Header/Header";
import './Tienda.css';

export function Tienda() {
    return(
        <>
        <Header />
            <div className="tienda-container">
                <h1>Tienda</h1>
            </div>
            
        <Footer />
        </>
    )
}