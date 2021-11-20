import "../assets/CSS/masthead.css";

import Navigation from "./Navigation";
import Marvel from "../assets/img/Marvel.png";

const Masthead = () => {
  return (
    <div>
      <div className="masthead">
        <img src={Marvel} alt="" className="logo" />
      </div>
      <Navigation />
    </div>
  );
};

export default Masthead;
