import React from 'react';

const deleteBook = () => {
    const eliminarLibro = () => {
        console.log('Libro eliminado');
    };

    return (
        <div className="container">
            <header>
                <div className="title">
                    <h1 className="texto">Eliminar libro</h1>
                </div>
                <div className="subcontainerSecondPage">
                    <div className="caja">
                        <div className="form">
                            <div className="row">
                                <div>
                                    <label htmlFor="titulo" className="rojo">Título: </label>
                                    <input type="text" name="titulo" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="autor" className="rojo">Autor: </label>
                                    <input type="text" name="autor" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="tema" className="rojo">Tema: </label>
                                    <input type="text" name="tema" placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="medio" className="rojo">Tipo de medio del ejemplar: </label>
                                    <input type="text" name="medio" placeholder="(fisico o electrónico)"/>
                                </div>
                            </div>
                        </div>
                        <button className="buttonSecondPage" onClick={() => window.location.href = '/'}>Página
                            principal
                        </button>
                        <button type="button" className="buttonSecondPage" onClick={eliminarLibro}>Eliminar libro</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default deleteBook;
