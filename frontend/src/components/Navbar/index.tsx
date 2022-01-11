import { ReactComponent as GithubIcons } from 'assets/Img/github.svg';
import './Style.css';

function Navbar() {
    return(
    <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="http://https://github.com/fabriyciio">
                    <div className="dsmovie-contact-container">
                        <GithubIcons />
                        <p className="dsmovie-contact-link">/devsuperior</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;