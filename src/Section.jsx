import "./App.scss";
import { Link } from "react-router-dom";

function Section() {
  return (
    <>
      <h1>Sección</h1>
      <div className="card">
        <div className="link">
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
}

export default Section;
