import React from 'react';
import '../css/Styles.css';
import {Button, ButtonGroup} from "react-bootstrap";

const LibraryCore = () => {

    const cambioNombre = () => {
        console.log('Realizar la consulta');
    };

    return (
        <div className="menu-container">

            <header>
                <div className="titleothers">
                    <h1 className="texto">Registra tu libro nuevo</h1>
                </div>
                <div className="subcontainerSecondPage">
                    <div className="caja">
                        <div className="form">
                            <div className="row">
                                <div>
                                    <label htmlFor="ISBN" className="rojo">ISBN: </label>
                                    <input type="text" name="ISBN" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="titulo" className="rojo">Titulo: </label>
                                    <input type="text" name="titulo" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="autor" className="rojo">Autor: </label>
                                    <input type="text" name="autor" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="fechaedicion" className="rojo">Fecha de edición: </label>
                                    <input type="text" name="fechaedicion" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="numeropaginas" className="rojo">Número de paginas: </label>
                                    <input type="text" name="numeropaginas" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadejemplares" className="rojo">Cantidad de
                                        ejemplares: </label>
                                    <input type="text" name="cantidadejemplares" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="disponibles" className="rojo">Cantidad de ejemplares
                                        disponibles: </label>
                                    <input type="text" name="disponibles" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="resumen" className="rojo">Resumen: </label>
                                    <input type="text" name="resumen" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="medio" className="rojo">Tipo de medio del ejemplar: </label>
                                    <input type="text" name="medio" placeholder="(fisico o electrónico)"/>
                                </div>
                                <div>
                                    <label htmlFor="tema" className="rojo">Tema: </label>
                                    <input type="text" name="tema" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="ubicacion" className="rojo" name="ubi">Ubicación física: </label>
                                    <input type="text" name="ubicacion" placeholder="Buscar..."/>
                                </div>
                            </div>
                        </div>

                        <ButtonGroup>
                            <Button className="custom-violent-buttonb" variant="secondary" onClick={() => window.location.href = '/'}>Pagina
                                principal</Button>
                            <Button className="custom-violent-buttonb" variant="secondary" onClick={cambioNombre}>Realizar la
                                consulta</Button>
                        </ButtonGroup>


                    </div>
                </div>
            </header>

        </div>
    );
};

export default LibraryCore;