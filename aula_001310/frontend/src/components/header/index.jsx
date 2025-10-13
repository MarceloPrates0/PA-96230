import { Link } from 'react-router-dom'

import './styles.css'

function Header() {
    return (
        <header className='header-container'>
            <div className='logo'>Sistema de Clientes</div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/cadastro">Cadastras</Link>
                <Link to="/lista">Listar</Link>
            </nav>
        </header>
    )
}

export default Header;