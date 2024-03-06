import './Header.css';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <div className='desktop-header'>
                <div className='search-container'>
                    <input type="text" placeholder="Buscar..." />
                    <i className='bi bi-search' alt="Icono de busqueda"></i>
                </div>
                <div className='desktop-header-logo'>
                    <h1>Archived</h1>
                    <h2>®</h2>
                </div>
                <div className='desktop-header-cuenta'>
                    <Link to="/acount/register" className='desktop-header-cuenta-item'>Crear cuenta</Link>
                    <div className='desktop-header-cuenta-item'> | </div>
                    <Link to="/acount/login" className='desktop-header-cuenta-item'>Iniciar sesión</Link>
                    <i className='bi bi-cart2 desktop-header-cuenta-item' alt="Icono de carrito de compras"></i>
                </div>
            </div>

            <nav className='desktop-nav'>
                <ul className='desktop-nav-lista'>
                    <li className='desktop-nav-item'><Link to="/">Inicio</Link></li>
                    <li className='desktop-nav-item'><Link to="/tienda">Tienda</Link></li>
                    <li className='desktop-nav-item'><Link to="/guia-de-talles">Guia de talles</Link></li>
                    <li className='desktop-nav-item'><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
            <div className='mobile-header'>
                <nav className='mobile-nav mobile-container' id='nav'>
                    <img src="public/images/archived-logo-blaco.png" alt="" className='mobile-nav-logo' />
                    <ul className='mobile-nav-lista'>
                        <li className='mobile-nav-item'><Link to="/" className='mobile-nav-link'>Inicio</Link></li>
                        <li className='mobile-nav-item'><Link to="/tienda" className='mobile-nav-link'>Tienda</Link></li>
                        <li className='mobile-nav-item'><Link to="/guia-de-talles" className='mobile-nav-link'>Guia de talles</Link></li>
                        <li className='mobile-nav-item'><Link to="/contacto" className='mobile-nav-link'>Contacto</Link></li>
                        
                        <li className='mobile-nav-item cuenta'><Link to="/acount/register" className='mobile-cuenta-item'>Crear cuenta</Link></li>
                        <li className='mobile-nav-item'><Link to="/acount/login" className='mobile-cuenta-item'>Iniciar sesión</Link></li>
                    </ul>
                    
                    <a href="#nav" className='mobile-nav-open'><i className='bi bi-list mobile-nav-icon'></i></a>
                    <a href="#" className='mobile-nav-close'><i className='bi bi-x-lg mobile-nav-icon'></i></a>
                </nav>
            </div>
        </header>

        
    )
}
