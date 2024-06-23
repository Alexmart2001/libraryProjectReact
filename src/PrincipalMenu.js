import React from 'react';
import '../src/css/Styles.css';
import {useNavigate} from "react-router-dom";

const MainMenu = () => {
    const navigate = useNavigate();

    const deleteBook = () => {
        navigate('/deleteBook')
    }

    const principalPage = () => {
        navigate('/')
    }

    const registerBook = () => {
        navigate('/RegisterBook')
    }

    const updateBook = () => {
        navigate('/updateBook')
    }

    const searchBook = () => {
        navigate('/searchBook')
    }

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1 className="menu-title">Biblioteca Digital</h1>
            </header>
            <div className="menu-buttons">
                <button className="menu-button" onClick={principalPage}>
                    Pagina Principal
                </button>
                <button className="menu-button" onClick={registerBook}>
                    Registrar Libro
                </button>
                <button className="menu-button" onClick={deleteBook}>
                    Eliminar Libro
                </button>
                <button className="menu-button" onClick={searchBook}>
                    Buscar Libro
                </button>
                <button className="menu-button" onClick={updateBook}>
                    Actualizar Libro
                </button>
            </div>
        </div>
    );
};

export default MainMenu;
