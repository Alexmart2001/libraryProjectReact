import React from "react";
import '../css/Styles.css';

const Pag2 = () => {
    return (
        <div className="containerr">
            <h1 className="titlee">Error en el Inicio de Sesión</h1>
            <p className="messagee">Parece que hubo un problema con tu autenticación. Por favor, intenta de nuevo.</p>
            <button className="buttonn" onClick={() => window.location.href = '/'}>Volver al Inicio</button>
        </div>
    );
}

export default Pag2;
