import React, {useState} from 'react';
import '../css/Styles.css';
import {Button, ButtonGroup} from "react-bootstrap";
import iAx from "../ConfigAXIOS";
import {toast} from "react-toastify";

const LibraryCore = () => {
    const [formValues, setFormValues] = useState({
        ISBN: '',
        titulo: '',
        autor: '',
        fechaedicion: '',
        numeropaginas: '',
        cantidadejemplares: '',
        disponibles: '',
        resumen: '',
        medio: '',
        tema: '',
        ubicacion: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const clearForm = () => {
        setFormValues({
            ISBN: '',
            titulo: '',
            autor: '',
            fechaedicion: '',
            numeropaginas: '',
            cantidadejemplares: '',
            disponibles: '',
            resumen: '',
            medio: '',
            tema: '',
            ubicacion: ''
        });
    };

    const createLibro = async () => {
        try {
            const data = {
                isbn: formValues.ISBN,
                titulo: formValues.titulo,
                autor: formValues.autor,
                fechaEdicion: formValues.fechaedicion,
                numeroPaginas: formValues.numeropaginas,
                cantidadEjemplares: formValues.cantidadejemplares,
                ejemplaresDisp: formValues.disponibles,
                resumen: formValues.resumen,
                medioEjemplar: formValues.medio,
                tema: formValues.tema,
                ubicacionFisica: formValues.ubicacion,
            };
            const rta = await iAx.post('/createLibro', JSON.stringify(data));
            if (rta.data.msg === "ER") {
                alert(rta.data.info);
                console.log("No se ha podido crear el registro");
            } else {
                toast.success(rta.data.info, {
                    position: "top-center",
                    autoClose: 3000,
                });

                clearForm();
            }
        } catch (error) {
            console.log("ERROR: " + error.message);
        }
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
                                    <input type="text" name="ISBN" value={formValues.ISBN} onChange={handleChange}
                                           placeholder="Digita..."/>
                                </div>
                                <div>
                                    <label htmlFor="titulo" className="rojo">Titulo: </label>
                                    <input type="text" name="titulo" value={formValues.titulo} onChange={handleChange}
                                           placeholder="Digita..."/>
                                </div>
                                <div>
                                    <label htmlFor="autor" className="rojo">Autor: </label>
                                    <input type="text" name="autor" value={formValues.autor} onChange={handleChange}
                                           placeholder="Digita..."/>
                                </div>
                                <div>
                                    <label htmlFor="fechaedicion" className="rojo">Fecha de edición: </label>
                                    <input type="text" name="fechaedicion" value={formValues.fechaedicion}
                                           onChange={handleChange} placeholder="Digita..."/>
                                </div>
                                <div>
                                    <label htmlFor="numeropaginas" className="rojo">Número de paginas: </label>
                                    <input type="text" name="numeropaginas" value={formValues.numeropaginas}
                                           onChange={handleChange} placeholder="Digita..."/>
                                </div>
                                <div>
                                    <label htmlFor="cantidadejemplares" className="rojo">Cantidad de
                                        ejemplares: </label>
                                    <input type="text" name="cantidadejemplares" value={formValues.cantidadejemplares}
                                           onChange={handleChange} placeholder="Digita..."/>
                                </div>
                                <div>
                                    <label htmlFor="disponibles" className="rojo">Cantidad de ejemplares
                                        disponibles: </label>
                                    <input type="text" name="disponibles" value={formValues.disponibles}
                                           onChange={handleChange} placeholder="Digita..."/>
                                </div>
                                <div>
                                    <label htmlFor="resumen" className="rojo">Resumen: </label>
                                    <input type="text" name="resumen" value={formValues.resumen} onChange={handleChange}
                                           placeholder="Buscar..."/>
                                </div>
                                <div>
                                    <label htmlFor="medio" className="rojo">Tipo de medio del ejemplar: </label>
                                    <input type="text" name="medio" value={formValues.medio} onChange={handleChange}
                                           placeholder="(fisico o electrónico)"/>
                                </div>
                                <div>
                                    <label htmlFor="tema" className="rojo">Tema: </label>
                                    <input type="text" name="tema" value={formValues.tema} onChange={handleChange}
                                           placeholder="Digita..."/>
                                </div>
                                <div>
                                    <label htmlFor="ubicacion" className="rojo">Ubicación física: </label>
                                    <input type="text" name="ubicacion" value={formValues.ubicacion}
                                           onChange={handleChange} placeholder="Digita..."/>
                                </div>
                            </div>
                        </div>

                        <ButtonGroup>
                            <Button className="custom-violent-buttonb" variant="secondary"
                                    onClick={() => window.location.href = '/'}>Pagina principal</Button>
                            <Button className="custom-violent-buttonb" variant="secondary" onClick={createLibro}>Crea tu
                                libro</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default LibraryCore;
