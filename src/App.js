import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./Pages/Characters";
import Comics from "./Pages/Comics";
import Publications from "./components/Publications";
import Masthead from "./components/Masthead";

function App() {
  return (
    <Router>
      <Masthead />
      <div className="container">
        <Routes>
          <Route path="/" element={<Characters />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route path="/comics/:id" element={<Publications />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
