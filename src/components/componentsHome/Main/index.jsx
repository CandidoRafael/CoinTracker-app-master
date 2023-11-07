import "./styles.css";
import imageHome from "../../../assets/imageHome.jpg";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <main className="main-container">
      <section className="section-content">
        <h1>Controle suas finanças com facilidade</h1>
        <p>
        CoinTrackr é o seu melhor companheiro financeiro. Assuma o controle de seu
           dinheiro e controle facilmente suas despesas, defina orçamentos e alcance
           seus objetivos financeiros.
        </p>
        <Link to="/register">Registrar</Link>
      </section>
      <section className="section-img">
        <img src={imageHome} alt="logo home" />
      </section>
    </main>
  );
};
