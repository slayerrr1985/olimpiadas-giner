import "./home.scss";
import { Link } from "react-router-dom";
import RingsImg from "../../assets/rings.svg";
function App() {
  return (
    <div className="home-page">
      <h1 className="title">Olimpiadas Giner de los Ríos</h1>
      <img className="logo" src={RingsImg} alt="" />
      <div className="card">
        <div className="link">
          <Link to="/mascot-ranking">Mascot Ranking</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
