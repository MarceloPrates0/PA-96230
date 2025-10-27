// src\components\Footer\index.js

import './styles.css';

function Footer() {
    return (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} © My Company. All rights reserved.
        <br /> Desenvolvido por SENAI
        </p>
    </footer>
    );
}

export default Footer;