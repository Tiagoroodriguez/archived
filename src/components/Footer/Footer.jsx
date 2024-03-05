import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div className='desktop-footer'>

                <div className='desktop-footer-redes'>
                    <div className='desktop-footer-logo'>
                        <h1>Archived</h1>
                        <h2>®</h2>
                    </div>
                    
                    <div>
                        <a href="#" className='desktop-footer-icon'><i className='bi bi-facebook' alt="Facebook icono"></i></a>
                        <a href="#" className='desktop-footer-icon'><i className='bi bi-twitter-x' alt="X icono"></i></a>
                        <a href="#" className='desktop-footer-icon'><i className='bi bi-tiktok' alt="TikTok icono"></i></a>
                        <a href="#" className='desktop-footer-icon'><i className='bi bi-instagram' alt="Instagram icono"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}