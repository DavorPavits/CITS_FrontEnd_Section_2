import React, { useEffect, useState } from 'react';
import './index.css';
import './App.css';
function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const [data, setData] = useState([]);

  const titleUrl = 'http://localhost:5001/api/titles/${search}';
  const nameUrl = `http://localhost:5001/api/names/${searchTerm}`;
  const urls = [titleUrl, nameUrl];
  useEffect(() => {
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.items)
          .catch((err) => {
            console.log(err);
          })
      )
    ).then((items) => {
      setData([].concat(...items));
    });
  }, []);

  return (
    <div>
      <h1>Search for Person</h1>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}></input>
      {searchTerm &&
        data
          .filter((i) => i.primaryTitle?.includes(searchTerm) || i.name?.includes(searchTerm))
          // .slice(0, 3)
          .map((i, index) => (
            <div key={index}>
              <p>{i.primaryTitle || i.name}</p>
            </div>
          ))}
    </div>
  );
}

export default Search;
