let livros = [];
let usuarios = [];

export const mockApi = {
    cadastrarLivro: (titulo, autor, isbn) => {
        const novoLivro = { titulo, autor, isbn, disponivel: true };
        livros.push(novoLivro);
        return novoLivro;
    },

    consultarLivros: (criterio) => {
        return livros.filter(livro => livro.titulo.includes(criterio) || livro.autor.includes(criterio));
    },

    emprestarLivro: (usuarioNome, isbn) => {
        const livro = livros.find(l => l.isbn === isbn && l.disponivel);
        const usuario = usuarios.find(u => u.nome === usuarioNome);

        if (livro && usuario) {
            livro.disponivel = false;
            usuario.livros_em_prestimo.push(livro);
            return livro;
        }
        return null;
    },

    devolverLivro: (usuarioNome, isbn) => {
        const usuario = usuarios.find(u => u.nome === usuarioNome);
        const livro = usuario?.livros_em_prestimo.find(l => l.isbn === isbn);

        if (livro) {
            livro.disponivel = true;
            usuario.livros_em_prestimo = usuario.livros_em_prestimo.filter(l => l.isbn !== isbn);
            return livro;
        }
        return null;
    },

    cadastrarUsuario: (nome) => {
        const novoUsuario = { nome, livros_em_prestimo: [] };
        usuarios.push(novoUsuario);
        return novoUsuario;
    }
};
