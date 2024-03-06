import { Link } from "react-router-dom"
import './NotFound.css';

export function NotFount() {
    return(
        <div className="container-404">
            <span>404 Not Found</span>
            <Link to="/">Inicio</Link>
        </div>
    )
}