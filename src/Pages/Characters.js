import "../assets/CSS/characters.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import Publications from "../components/Publications";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000");
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
    <div className="catalog">
      {data.results.map((character) => {
        return (
          <Link to={`/comics/${character._id}`}>
            <div className="character">
              <div className="mug-shot">
                {character.thumbnail.path !==
                "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                  <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    type="submit"
                    alt={character.name}
                    value={character.name}
                  />
                ) : (
                  <div className="no-mug"></div>
                )}
              </div>
              <div className="character-name">{character.name}</div>
              <div className="character-description">
                {character.description}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Characters;
