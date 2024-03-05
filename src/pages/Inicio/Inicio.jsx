import { Footer } from "../../componets/Footer/Footer";
import { Header } from "../../componets/Header/Header";
import { Slider } from "../../componets/Slider/Slider";
import { Novedades } from "../../pages/Novedades/Novedades";

export function Inicio() {
    return(
        <>
        <Header />
            <main>
                <Slider />
                <Novedades />
            </main>
        <Footer />
        </>
    )
}