import './BotonNormal.css';
import { Link } from "react-router-dom";



export function BotonNormal({textoBoton, linkBoton}) { 
    return (
        <div className="boton-normal-container">
            <div className="boton-normal">
                <Link to={`/${linkBoton}`}>{textoBoton}</Link>
            </div>
        </div>
    )
}
