import "./styles.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navBar-container">
      <div className="navBar-img">
        <img src={logo} alt="logo app" />
      </div>
      <ul className="navBar-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#serviços">Serviços</a>
        </li>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
        <li>
          <Link to="/register" className="signUp-btn">
            Cadastrar
          </Link>
        </li>
      </ul>
    </nav>
  );
}