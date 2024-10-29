// src/Router/routes.js
import CadastroLivro from '../Pages/CadastroLivro';
import ConsultaLivros from '../Pages/ConsultaLivros';
import EmprestimoLivros from '../Pages/EmprestimoLivro';
import DevolucaoLivros from '../Pages/DevolucaoLivro';
import { FaBook, FaSearch, FaExchangeAlt, FaUndo } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

const routes = [
    {
        type: "collapse",
        name: "Cadastro de Livros",
        key: "cadastro-livros",
        route: "/cadastro",
        icon: <FaBook size="15px" color="inherit" />,
        component: CadastroLivro,
    },
    {
        type: "collapse",
        name: "Consulta de Livros",
        key: "consulta-livros",
        route: "/consulta",
        icon: <FaSearch size="15px" color="inherit" />,
        component: ConsultaLivros,
    },
    {
        type: "collapse",
        name: "Empréstimo de Livros",
        key: "emprestimo-livros",
        route: "/emprestimo",
        icon: <FaExchangeAlt size="15px" color="inherit" />,
        component: EmprestimoLivros,
    },
    {
        type: "collapse",
        name: "Devolução de Livros",
        key: "devolucao-livros",
        route: "/devolucao",
        icon: <FaUndo size="15px" color="inherit" />,
        component: DevolucaoLivros,
    },
    // Rota para redirecionar para o Cadastro de Livros
    {
        type: "collapse",
        name: "Home",
        key: "home",
        route: "/",
        component: () => <Navigate to="/cadastro" />
    },
];

export default routes;
