import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { InformacionEnvios } from "../../components/InformacionEnvios/InformacionEnvios";
import { Slider } from "../../components/Slider/Slider";
import { Novedades } from "../../components/Novedades/Novedades";


export function Inicio() {
    return(
        <>
        <Header />
            <main>
                <Slider />
                <Novedades />
                <InformacionEnvios />
            </main>
        <Footer />
        </>
    )
}