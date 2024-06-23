import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LibraryCore from './componentes/libraryCore';
import Home from './Home';
import './css/Styles.css';
import PrincipalMenu from "./PrincipalMenu";
import DeleteBook from "./componentes/deleteBook";
import UpdateBook from "./componentes/updateBook";
import SearchBook from "./componentes/searchBook";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/RegisterBook" element={<LibraryCore/>}/>
                <Route path="/principalMenu" element={<PrincipalMenu/>}/>
                <Route path="/deleteBook" element={<DeleteBook/>}/>
                <Route path="/updateBook" element={<UpdateBook/>}/>
                <Route path="/searchBook" element={<SearchBook/>}/>
            </Routes>
        </Router>
    );
};

export default App;
