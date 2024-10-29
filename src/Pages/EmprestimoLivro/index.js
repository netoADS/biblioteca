// src/Pages/EmprestimoLivro/index.js
import React, { useState } from 'react';
import { mockApi } from '../../Data/mockData';

const EmprestimoLivro = () => {
    const [usuarioNome, setUsuarioNome] = useState('');
    const [isbn, setIsbn] = useState('');

    const handleEmprestimo = (e) => {
        e.preventDefault();
        const resultado = mockApi.emprestarLivro(usuarioNome, isbn);
        if (resultado) {
            alert('Livro emprestado com sucesso!');
        } else {
            alert('Erro ao emprestar o livro. Verifique se está disponível ou se o usuário está cadastrado.');
        }
        setUsuarioNome('');
        setIsbn('');
    };

    return (
        <form onSubmit={handleEmprestimo}>
            <input value={usuarioNome} onChange={(e) => setUsuarioNome(e.target.value)} placeholder="Nome do Usuário" required />
            <input value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="ISBN do Livro" required />
            <button type="submit">Emprestar Livro</button>
        </form>
    );
};

export default EmprestimoLivro;
