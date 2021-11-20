import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">
        <button>Characters</button>
      </Link>
      <Link to="/comics">
        <button>Comix</button>
      </Link>
      <Link to="/comics/:characterID">
        <button>Get Character Comix</button>
      </Link>
    </div>
  );
};

export default Navigation;
