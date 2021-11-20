import "../assets/CSS/characters.css";
import axios from "axios";
import { useState, useEffect } from "react";

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
    <div>
      {data.results.map((character) => {
        return (
          <div key={character._id} className="character">
            <div className="mug-shot">
              {character.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt=""
                />
              ) : (
                <div className="no-mug"></div>
              )}
            </div>
            <div className="character-name">
              <h2>{character.name}</h2>
            </div>
            {character.description ? (
              <div className="character-description">
                <p>{character.description}</p>
              </div>
            ) : (
              <div className="hidden">x</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
