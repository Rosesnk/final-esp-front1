import { Link } from "react-router-dom";
import "./header.css";

/** Encabezado
 * @author Rocio Torrez
 * @returns {JSX.Element}
 */
const Header = () => {
  return (
    <header>
      <div>
        <div>
          <h2>Examen Final de Frontend IV - Rocio Torrez</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favorites">Favoritos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
