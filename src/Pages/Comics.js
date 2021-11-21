import axios from "axios";
import { useState, useEffect } from "react";
import "../assets/CSS/comics.css";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/comics");
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
      {data.results.map((comics) => {
        return (
          <div key={comics._id} className="comics">
            <div className="comics-cover">
              <img
                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                alt=""
              />
            </div>
            <div className="comics-info">
              <h2>{comics.title}</h2>

              <p>{comics.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
