// src/Pages/ConsultaLivros/index.js
import React, { useState } from 'react';
import { mockApi } from '../../Data/mockData';

const ConsultaLivros = () => {
    const [criterio, setCriterio] = useState('');
    const [resultados, setResultados] = useState([]);

    const buscarLivros = () => {
        const livros = mockApi.consultarLivros(criterio);
        setResultados(livros);
    };

    return (
        <div>
            <input value={criterio} onChange={(e) => setCriterio(e.target.value)} placeholder="Buscar por título ou autor" />
            <button onClick={buscarLivros}>Buscar</button>
            <ul>
                {resultados.map((livro, index) => (
                    <li key={index}>{livro.titulo} - {livro.autor} ({livro.isbn}) - {livro.disponivel ? "Disponível" : "Indisponível"}</li>
                ))}
            </ul>
        </div>
    );
};

export default ConsultaLivros;
