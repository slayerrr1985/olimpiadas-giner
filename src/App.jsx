import "./App.scss";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Olimpiadas Giner de los Ríos</h1>
      <div className="card">
        <div className="link">
          <Link to="/section">Section</Link>
        </div>
      </div>
    </>
  );
}

export default App;
