import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Publications = () => {
  const { characterId } = useParams;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/comics/${characterId}`,
          {
            params: {
              character_id: { characterId },
            },
          }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <span>Data is still loading ...</span>
  ) : (
    <div>
      Something here
      <div>{data.comics}</div>
    </div>
  );
};

export default Publications;
