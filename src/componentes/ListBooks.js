import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Styles.css';

const ListBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
                setBooks(response.data.slice(0, 5));
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="menu-container">
            <header>
                <div className="titleothers">
                    <h1 className="texto">Listado de Libros</h1>
                </div>
                <div className="subcontainerSecondPage">
                    <div className="caja">
                        <div className="book-list">
                            {books.length === 0 ? (
                                <p>No hay libros disponibles.</p>
                            ) : (
                                <ul>
                                    {books.map((book) => (
                                        <li key={book.name}>
                                            <h3>{book.body}</h3>
                                            <p><strong>ID:</strong> {book.id}</p>
                                            <p><strong>Contenido:</strong> {book.body}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button className="custom-violent-buttonb" onClick={() => window.location.href='/'}>Página principal</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default ListBook;
