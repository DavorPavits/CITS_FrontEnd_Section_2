import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ResultDetailTitle() {
  const { primaryTitle } = useParams(); // Extract the result ID from the URL
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching for ', primaryTitle);
    const fetchResult = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/titles/search?keywords=${primaryTitle}`);
        if (!response.ok) throw new Error('Failed to fetch result details');
        const data = await response.json();
        setResult(data);
        console.log(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchResult();
  }, [primaryTitle]);

  if (error) return <div>Error: {error}</div>;
  if (!result) return <div>Loading...</div>;

  return (
    <div>
      <h1>{result.primaryTitle}</h1>
      <p>{result.plot}</p>
    </div>
  );
}

export default ResultDetailTitle;
