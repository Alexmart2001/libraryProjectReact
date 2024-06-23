import React from 'react';
import {useNavigate} from 'react-router-dom';
import './css/Styles.css';

const Home = () => {
    const navigate = useNavigate();

    const PrincipalMenu = () => {
        navigate('/principalMenu');
    };

    return (<div className="container">
        <header>
            <div className="title">
                <h1 className="texto">Biblioteca Bootcamp LibroFeliz</h1>
            </div>
        </header>

        <div className="subcontainer">
            <main>
                <div className="images">
                    <img className="img" src="/images/1.jpg" alt="Imagen 1"/>
                    <img className="img" src="/images/2.jpg" alt="Imagen 2"/>
                    <img className="img" src="/images/3.jpg" alt="Imagen 3"/>
                    <img className="img" src="/images/4.jpg" alt="Imagen 4"/>
                </div>
                <button className="buttonmainPage" onClick={PrincipalMenu}>MENU PRINCIPAL</button>
            </main>
        </div>
        <footer>
            <p className="derechos">2024 - Alexander Martinez - Derechos reservados &copy; 2024</p>
        </footer>
    </div>);
};


export default Home;

