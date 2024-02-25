import { Link } from "react-router-dom";
import RingsImg from "../../assets/rings.svg";
import "./home.scss";

function App() {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Olimpiadas Giner de los Ríos</h1>
      <img className="home-page__logo" src={RingsImg} alt="" />
      <div className="home-page__card">
        <Link className="home-page__link" to="/mascot-ranking">
          OLYMPIC MASCOT VOTING CEREMONY
        </Link>
      </div>
    </div>
  );
}

export default App;
