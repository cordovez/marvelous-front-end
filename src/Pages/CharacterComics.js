import "../assets/CSS/characters.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const CharacterComics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/comics/");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>Data is still loading ...</span>
  ) : (
    <div>
      {data.results.map((issues) => {
        return <div className="issues">{issues.comics}</div>;
      })}
    </div>
  );
};

export default CharacterComics;
