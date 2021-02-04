import logo from '../img/logo.png';
import './header.css';

function header() {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} className="logo" alt="logo" />
                <h1> Concentrados - Mis mascotas </h1>
            </div>
        </header>
    );
}

export default header;