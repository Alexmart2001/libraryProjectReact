import React, { useState } from 'react';
import { Button, ButtonGroup } from "react-bootstrap";
import iAx from "../ConfigAXIOS";

const DeleteBook = () => {
    const [formValues, setFormValues] = useState({
        isbn: '',
        autor: '',
        tema: '',
        medio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const clearForm = () => {
        setFormValues({
            isbn: '',
            autor: '',
            tema: '',
            medio: ''
        });
    };

    const deleteLibro = async () => {
        try {
            const data = { isbn: formValues.isbn };
            const rta = await iAx.post('/delLibro', JSON.stringify(data));
            console.log("rta ----> " + JSON.stringify(rta));
            console.log("Cantidad registros ----> ", Array.isArray(rta.data.info) ? rta.data.info.length : 'No es un array');
            if (rta.data.msg === "ER") {
                alert(rta.data.info);
                console.log("No se ha podido eliminar el registro");
            } else {
                alert("Se ha eliminado correctamente el registro");
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
                    <h1 className="texto">Eliminar libro</h1>
                </div>
                <div className="subcontainerSecondPage">
                    <div className="caja">
                        <div className="form">
                            <div className="row">
                                <div>
                                    <label htmlFor="isbn" className="rojo">ISBN: </label>
                                    <input type="text" name="isbn" value={formValues.isbn} onChange={handleChange} placeholder="Digita..." />
                                </div>
                                <div>
                                    <label htmlFor="autor" className="rojo">Autor: </label>
                                    <input type="text" name="autor" value={formValues.autor} onChange={handleChange} placeholder="Digita..." />
                                </div>
                                <div>
                                    <label htmlFor="tema" className="rojo">Tema: </label>
                                    <input type="text" name="tema" value={formValues.tema} onChange={handleChange} placeholder="Digita..." />
                                </div>
                                <div>
                                    <label htmlFor="medio" className="rojo">Tipo de medio del ejemplar: </label>
                                    <input type="text" name="medio" value={formValues.medio} onChange={handleChange} placeholder="(fisico o electrónico)" />
                                </div>
                            </div>
                        </div>
                        <ButtonGroup>
                            <Button className="custom-violent-buttonb" variant="secondary" onClick={() => window.location.href = '/'}>
                                Página principal
                            </Button>
                            <Button className="custom-violent-buttonb" variant="secondary" onClick={deleteLibro}>
                                Eliminar libro
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default DeleteBook;
