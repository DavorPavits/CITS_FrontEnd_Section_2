import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';

function ResultDetailTitle() {
  const { primaryTitle } = useParams(); // Extract the result ID from the URL
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [stars, setStars] = useState(0);

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
      <img src={result.poster} alt="img" />
      <h1>{result.primaryTitle}</h1>
      <p>Aired: {result.startDate}</p>
      <div className="language">
        <h4>Lan: </h4>
        {result.languages
          .filter((l, i, self) => l !== null && i === self.indexOf(l))
          .map((l) => (
            <p>{l}</p>
          ))}
      </div>
      <div className="genres">
        <h4>Genre: </h4>
        {result.genres.map((i) => (
          <p>{i}</p>
        ))}
      </div>
      <p>Type of Movie : {result.type}</p>
      <p>{result.plot}</p>
      <button>Bookmark Title</button>
      <div className="flex bg-white items-center justify-between  border border-black rounded-md min-w-[600px]  p-2">
        <div className="p-2 text-base font-semibold">
          Intersteller <span className="text-gray-400 ">(2014)</span>
        </div>
        <div className="flex gap-4 p-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex justify-center">
              <FiStar
                size={25}
                strokeWidth={0}
                fill={index + 1 <= stars ? 'gold' : 'grey'}
                cursor="pointer"
                className="star"
                onClick={() => setStars(index + 1)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultDetailTitle;
