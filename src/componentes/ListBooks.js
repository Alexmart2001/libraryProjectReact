import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../css/Styles.css';
import {Table, Pagination, Button} from 'react-bootstrap';
import iAx from '../ConfigAXIOS';
import {GrAchievement, GrApple, GrBlog, GrCentos, GrChapterNext, GrChapterPrevious} from "react-icons/gr";
import {toast} from "react-toastify";

const ListBook = () => {
    const [books, setBooks] = useState([]);
    const [numPag, setPag] = useState(1);
    const numRegPag = 10;
    const [totalPages, setTotalPages] = useState(1);

    const ultRegistro = numPag * numRegPag;
    const primerRegistro = ultRegistro - numRegPag;
    const listaRegXpag = books.slice(primerRegistro, ultRegistro);

    useEffect(() => {
        async function getAllLibros() {
            try {
                const rta = await iAx.get('/getAllLibros');
                console.log('Respuesta completa:', rta);
                console.log('Datos:', rta.data);

                if (Array.isArray(rta.data.info)) {
                    setBooks(rta.data.info);
                    setTotalPages(Math.ceil(rta.data.info.length / numRegPag));
                } else {
                    console.error('La respuesta de la API no es un array:', rta.data);
                    setBooks([]);
                }
            } catch (error) {
                console.log("ERROR: " + error.message);
            }
        }

        getAllLibros();
    }, []);

    const paginar = (pag) => {
        setPag(pag);
    }

    const lBtnPag = [];
    for (let x = 1; x <= totalPages; x++) {
        lBtnPag.push(
            <Pagination.Item key={x} active={x === numPag} onClick={() => paginar(x)}>{x}</Pagination.Item>
        );
    }

    return (
        <div className="menu-container">
            <header>
                <div className="titleothers">
                    <h1 className="texto">Listado de Libros</h1>
                </div>
                <div className="subcontainerSecondPage">
                    <div className="caja">
                        {books.length === 0 ? (
                            <p>No hay libros disponibles.</p>
                        ) : (
                            <>
                                <Table striped bordered hover className="mt-5">
                                    <thead>
                                    <tr>
                                        <th>ISBN</th>
                                        <th>Título</th>
                                        <th>Autor</th>
                                        <th>Fecha de edición</th>
                                        <th>Número de páginas</th>
                                        <th>Cantidad de ejemplares</th>
                                        <th>Cantidad de ejemplares disponibles</th>
                                        <th>Resumen</th>
                                        <th>Tipo de medio del ejemplar</th>
                                        <th>Tema</th>
                                        <th>Ubicación física</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {listaRegXpag.map((book, index) => (
                                        <tr key={index}>
                                            <td>{book.isbn}</td>
                                            <td>{book.titulo}</td>
                                            <td>{book.autor}</td>
                                            <td>{book.fechaEdicion}</td>
                                            <td>{book.numeroPaginas}</td>
                                            <td>{book.cantidadEjemplares}</td>
                                            <td>{book.ejemplaresDisp}</td>
                                            <td>{book.resumen}</td>
                                            <td>{book.medioEjemplar}</td>
                                            <td>{book.tema}</td>
                                            <td>{book.ubicacionFisica}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>

                                <Pagination>
                                    <Pagination.First onClick={() => paginar(1)}><GrCentos/></Pagination.First>
                                    <Pagination.Prev
                                        onClick={() => paginar(Math.max(numPag - 1, 1))}><GrChapterPrevious/></Pagination.Prev>
                                    {lBtnPag}
                                    <Pagination.Next
                                        onClick={() => paginar(Math.min(numPag + 1, totalPages))}><GrChapterNext/></Pagination.Next>
                                    <Pagination.Last onClick={() => paginar(totalPages)}><GrCentos/></Pagination.Last>
                                </Pagination>
                            </>
                        )}
                        <Button className="custom-violent-buttonb mt-3" onClick={() => window.location.href = '/'}>Página
                            principal</Button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default ListBook;
