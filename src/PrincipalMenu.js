import React, {useState} from 'react';
import '../src/css/Styles.css';
import {useNavigate} from "react-router-dom";
import {Carousel} from "react-bootstrap";

const MainMenu = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

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

    const listBook = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigate('/listBook');
        }, 2500);
    };

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1 className="menu-title">Biblioteca Digital</h1>
            </header>
            <div className="content-container">
                <div className="carousel-container">
                    <Carousel controls={false} interval={1000} fade={false}>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/1.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/2.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/3.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/4.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/5.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
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
                    <button className="menu-button" onClick={listBook}>
                        {loading ? 'Trayendo datos...' : 'Libros almacenados'}
                    </button>
                </div>
                <div className="carousel-container">
                    <Carousel interval={1000} controls={false} fade={false}>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/6.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/7.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/8.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/9.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <img className="carousel-image" src="/images/10.jpg" alt=""/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
