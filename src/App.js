import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LibraryCore from './componentes/libraryCore';
import Home from './Home';
import './css/Styles.css';
import PrincipalMenu from "./PrincipalMenu";
import DeleteBook from "./componentes/deleteBook";
import UpdateBook from "./componentes/updateBook";
import SearchBook from "./componentes/searchBook";
import ListBook from "./componentes/ListBooks";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthHandler from "./AuthHandler";
import Pag2 from "./componentes/LoginError";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthHandler/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/AuthError" element={<Pag2/>}/>
                <Route path="/RegisterBook" element={<LibraryCore/>}/>
                <Route path="/principalMenu" element={<PrincipalMenu/>}/>
                <Route path="/deleteBook" element={<DeleteBook/>}/>
                <Route path="/updateBook" element={<UpdateBook/>}/>
                <Route path="/searchBook" element={<SearchBook/>}/>
                <Route path="/listBook" element={<ListBook/>}/>
            </Routes>
            <ToastContainer/>
        </Router>
    );
};

export default App;
