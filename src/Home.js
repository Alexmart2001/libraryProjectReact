import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './css/Styles.css';

const Home = () => {
    const navigate = useNavigate();

    const PrincipalMenu = () => {
        navigate('/principalMenu');
    };

    return (
        <div className="menu-container">
            <div className="menu-container">
                <header>
                    <div className="title">
                        <h1 className="texto">Biblioteca Bootcamp LibroFeliz</h1>
                    </div>
                </header>

                    <div className="card-container">
                        <Card style={{width: '18rem', marginBottom: '20px'}} className="custom-violent-button"
                              border="green">
                            <Card.Img variant="top" src="/images/1.jpg" alt="Cien años de soledad"/>
                            <Card.Body>
                                <Card.Title>Cien años de soledad</Card.Title>
                                <Card.Text>
                                    Una obra maestra de la literatura latinoamericana.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{width: '18rem', marginBottom: '20px'}} className="custom-violent-button"
                              border="green">
                            <Card.Img variant="top" src="/images/2.jpg" alt="Relato de un naufragio"/>
                            <Card.Body>
                                <Card.Title>Relato de un naufragio</Card.Title>
                                <Card.Text>
                                    Una historia de supervivencia en alta mar.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{width: '18rem', marginBottom: '20px'}} className="custom-violent-button"
                              border="green">
                            <Card.Img variant="top" src="/images/3.jpg" alt="Historia de Colombia"/>
                            <Card.Body>
                                <Card.Title>Historia de Colombia</Card.Title>
                                <Card.Text>
                                    Una mirada profunda a la historia del país.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{width: '18rem', marginBottom: '20px'}} className="custom-violent-button"
                              border="green">
                            <Card.Img variant="top" src="/images/4.jpg" alt="El amor en los tiempos del cólera"/>
                            <Card.Body>
                                <Card.Title>El amor en los tiempos del cólera</Card.Title>
                                <Card.Text>
                                    Una historia de amor y enfermedad en tiempos difíciles.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <button className="custom-violent-buttonb" onClick={PrincipalMenu}>MENU PRINCIPAL</button>

                </div>

                    <footer>
                        <p className="derechos">2024 - Alexander Martinez - Derechos reservados &copy; 2024</p>
                    </footer>

        </div>
    );
};

export default Home;
