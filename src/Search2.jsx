import React, { useState, useEffect } from 'react';

function Search1() {
  const peopleUrl = 'http://localhost:5001/api/names?page=0&pageSize=10000';
  const titleUrl = 'http://localhost:5001/api/titles?page=0&pageSize=10000';

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch(peopleUrl, options)
      .then((res) => res.json())
      .then((data) => setPeople(data.items))
      .catch((err) => console.log(err));
  }, []);

  const [title, setTitle] = useState([]);
  useEffect(() => {
    fetch(titleUrl, options)
      .then((res) => res.json())
      .then((data) => setTitle(data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
      <div className="people">
        {searchTerm &&
          people
            .filter((n) => n.name.includes(searchTerm))
            .slice(0, 5)
            .map((i, k) => (
              <div key={k}>
                <h4>{i.name}</h4>
                <p>{i.birthYear}</p>
                <div className="profession">{i.professions && i.professions.map((t, i) => <div key={i}>{t}</div>)}</div>
              </div>
            ))}
      </div>

      <div className="title">
        {searchTerm &&
          title
            .filter((t) => t.primaryTitle.toLowerCase().includes(searchTerm.toLowerCase()))
            .slice(0, 5)
            .map((t, i) => <p key={i}>{t.primaryTitle}</p>)}
      </div>
    </div>
  );
}

export default Search1;
