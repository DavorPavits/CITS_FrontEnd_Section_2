import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ResultDetailPerson() {
  const { name } = useParams(); // Extract the result ID from the URL
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching for ', name);
    const fetchResult = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/names/${name}`);
        if (!response.ok) throw new Error('Failed to fetch result details');
        const data = await response.json();
        setResult(data);
        console.log(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchResult();
  }, [name]);

  if (error) return <div>Error: {error}</div>;
  if (!result) return <div>Loading...</div>;

  return (
    <div>
      <h1>{result.name}</h1>
      <div>
        <h2>Details</h2>
        <p>Born: {result.birthYear}</p>
        <div>
          <h3>Professions:</h3>
          <div>
            {result.professions.map((i) => (
              <p>{i}</p>
            ))}
          </div>
          <h3>Known Titles</h3>
          <div>
            {result.knownForTitles.map((i) => (
              <p>{i}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDetailPerson;
