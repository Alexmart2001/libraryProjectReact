import React, { useState } from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

const SearchBook = () => {
    const [searchResult, setSearchResult] = useState(null);
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        tema: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const buscarLibro = () => {
        console.log('Buscando libro...');
        // Aquí iría la lógica para buscar el libro en la base de datos
        // Ejemplo de resultado de búsqueda
        const result = {
            titulo: formData.titulo || 'Título del Libro',
            autor: formData.autor || 'Autor del Libro',
            tema: formData.tema || 'Tema del Libro',
            isbn: '1234567890',
            medio: 'Físico',
            ubicacion: 'Estante A1',
            fechaedicion: '2020-01-01',
            numeropaginas: 300,
            cantidadejemplares: 10,
            disponibles: 5,
            resumen: 'Este es un resumen del libro...'
        };
        setSearchResult(result);
    };

    return (
        <div className="menu-container">

            <header>
                <div className="titleothers">
                    <h1 className="texto">Buscar libro</h1>
                </div>
                <div className="subcontainerSecondPage">
                    <div className="caja">
                        <div className="form">
                            <div className="row">
                                <div>
                                    <label htmlFor="titulo" className="rojo">Título: </label>
                                    <input type="text" name="titulo" placeholder="Buscar..." value={formData.titulo} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="autor" className="rojo">Autor: </label>
                                    <input type="text" name="autor" placeholder="Buscar..." value={formData.autor} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="tema" className="rojo">Tema: </label>
                                    <input type="text" name="tema" placeholder="Buscar..." value={formData.tema} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <ButtonGroup>
                            <Button className="custom-violent-buttonb" variant="secondary" onClick={() => window.location.href = '/'}>
                                Página principal
                            </Button>
                            <Button className="custom-violent-buttonb" variant="secondary"  onClick={buscarLibro}>
                                Buscar libro
                            </Button>
                        </ButtonGroup>
                        {searchResult && (
                            <div className="resultado">
                                <h2>Resultado de la búsqueda</h2>
                                <p><strong>Título:</strong> {searchResult.titulo}</p>
                                <p><strong>Autor:</strong> {searchResult.autor}</p>
                                <p><strong>Tema:</strong> {searchResult.tema}</p>
                                <p><strong>ISBN:</strong> {searchResult.isbn}</p>
                                <p><strong>Tipo de medio:</strong> {searchResult.medio}</p>
                                <p><strong>Ubicación física:</strong> {searchResult.ubicacion}</p>
                                <p><strong>Fecha de edición:</strong> {searchResult.fechaedicion}</p>
                                <p><strong>Número de páginas:</strong> {searchResult.numeropaginas}</p>
                                <p><strong>Cantidad de ejemplares:</strong> {searchResult.cantidadejemplares}</p>
                                <p><strong>Cantidad de ejemplares disponibles:</strong> {searchResult.disponibles}</p>
                                <p><strong>Resumen:</strong> {searchResult.resumen}</p>
                            </div>
                        )}
                    </div>
                </div>
            </header>

        </div>
    );
};

export default SearchBook;
