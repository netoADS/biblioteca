// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppRouter from './Router';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/cadastro">Cadastro de Livros</Link></li>
                        <li><Link to="/consulta">Consulta de Livros</Link></li>
                        <li><Link to="/emprestimo">Empréstimo de Livros</Link></li>
                        <li><Link to="/devolucao">Devolução de Livros</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <AppRouter /> {/* Este deve estar dentro do App, mas fora de qualquer Router */}
            </div>
        </div>
    );
};

export default App;
