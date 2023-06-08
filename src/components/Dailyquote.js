import { useState, useEffect } from "react";

function Dailyquote() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      const category = 'inspirational';
      const apiKey = 'Tsp1dK3i0tBVwfFRvOL65A==Z7UsUjDNLwOBXRHH';
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

      fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            setHasError(true);
          } else {
            return response.json();
          }
        })
        .then(jsonData => {
          setData(jsonData);
        })
        .catch(error => {
          setHasError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  if (hasError) {
    return <div><p>Something went wrong...</p></div>;
  }

  if (loading) {
    return <div><p>Loading...</p></div>;
  }

  return (
    <div>
      <p>{data.quote}</p>
      <p>{data.author}</p>
    </div>
  );
}

export default Dailyquote;
