import './ubicacion.css';

const Ubicacion = () => {
    return (
        <div className="ubicacion">
            <h3>Encuéntranos en:</h3>
            <div className="campusCentral">
                <h4>Campus Central</h4>
                <p>PBX: 45132-4512</p>
                <p>Vista Hermosa III, zona 16 Guatemala, Centroamérica 01016</p>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.2839453485694!2d-91.11080832586065!3d14.950246968422737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858956c4dd7d0997%3A0x77e9e75e45b15ff9!2sIteck!5e1!3m2!1ses-419!2sgt!4v1728057315015!5m2!1ses-419!2sgt" 
                    style={{border: 0}} allowFullScreen="" loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Ubicacion;
