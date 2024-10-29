// src/Pages/DevolucaoLivro/index.js
import React, { useState } from 'react';
import { mockApi } from '../../Data/mockData';

const DevolucaoLivro = () => {
    const [usuarioNome, setUsuarioNome] = useState('');
    const [isbn, setIsbn] = useState('');

    const handleDevolucao = (e) => {
        e.preventDefault();
        const resultado = mockApi.devolverLivro(usuarioNome, isbn);
        if (resultado) {
            alert('Livro devolvido com sucesso!');
        } else {
            alert('Erro ao devolver o livro. Verifique se o usuário possui este livro.');
        }
        setUsuarioNome('');
        setIsbn('');
    };

    return (
        <form onSubmit={handleDevolucao}>
            <input value={usuarioNome} onChange={(e) => setUsuarioNome(e.target.value)} placeholder="Nome do Usuário" required />
            <input value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="ISBN do Livro" required />
            <button type="submit">Devolver Livro</button>
        </form>
    );
};

export default DevolucaoLivro;
