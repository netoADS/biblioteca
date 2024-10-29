// src/Pages/CadastroLivro/index.js
import React, { useState } from 'react';
import { mockApi } from '../../Data/mockData';

const CadastroLivro = () => {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [isbn, setIsbn] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        mockApi.cadastrarLivro(titulo, autor, isbn);
        alert('Livro cadastrado com sucesso!');
        setTitulo('');
        setAutor('');
        setIsbn('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
            <input value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor" required />
            <input value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="ISBN" required />
            <button type="submit">Cadastrar Livro</button>
        </form>
    );
};

export default CadastroLivro;
