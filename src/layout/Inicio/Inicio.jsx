import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Slider } from "../../components/Slider/Slider";
import { Novedades } from "../../layout/Novedades/Novedades";

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