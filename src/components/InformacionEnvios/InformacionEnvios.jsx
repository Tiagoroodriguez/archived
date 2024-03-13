import './InformacionEnvios.css';

export function InformacionEnvios() {
    return(
        <>
        <section>
            <div className="info-container">
                <div className="info celu">
                    <i className="bi bi-box-seam"></i>
                    <span>Envios a todo el país</span>
                </div>
                <div className="linea"></div>
                <div className="info">
                    <i className="bi bi-credit-card"></i>
                    <span>Paga con tarjeta de debito o credito</span>
                </div>
                <div className="linea"></div>
                <div className="info">
                    <i className="bi bi-lock"></i>
                    <span>Compra con seguridad</span>
                </div>
            </div>
        </section>
        </>
    )
}