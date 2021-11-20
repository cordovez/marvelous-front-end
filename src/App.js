import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Halftone from "./assets/img/halftone3.png";
import Characters from "./Pages/Characters";
import Comics from "./Pages/Comics";
import CharacterComics from "./Pages/CharacterComics";
import Masthead from "./components/Masthead";

function App() {
  return (
    <Router>
      <Masthead />
      <div className="container">
        <Routes>
          <Route path="/" element={<Characters />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route
            path="/comics/:characterID"
            element={<CharacterComics />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
