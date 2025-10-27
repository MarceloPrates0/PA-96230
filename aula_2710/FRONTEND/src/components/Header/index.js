// src\components\Header\index.js

import './styles.css';

function Header() {
    return (
    <header className="header">
        <div>Sistema de Gerenciamento de Usuários</div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/cadastro'>Cadastrar</Link>
            <Link to='/listar'>Listar Usuários</Link>
        </nav>
    </header>
    );
}