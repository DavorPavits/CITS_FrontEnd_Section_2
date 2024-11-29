import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
function Search3() {
  const peopleUrl = 'http://localhost:5001/api/names?page=0&pageSize=10000';
  const titleUrl = 'http://localhost:5001/api/titles?page=0&pageSize=10000';

  const navigate = useNavigate();
  const handleResultClick = (id) => {
    navigate(`/result/${id}`);
  };

  const handleTitleClick = (title) => {
    navigate(`/resultTitle/${title}`);
  };

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
      <div id="list">
        {/* <div className="people"> */}
        {searchTerm &&
          people
            .filter((n) => n.name.includes(searchTerm))
            .slice(0, 3)
            .map((i, k) => (
              <div key={k} onClick={() => handleResultClick(i.name)} className="listItem">
                <h4>{i.name}</h4>
                <p>{i.birthYear}</p>
                <div className="profession">{i.professions && i.professions.map((t, i) => <div key={i}>{t}</div>)}</div>
              </div>
            ))}
        {/* </div> */}
      </div>

      {/* <div className="title"> */}
      <div id="list">
        {searchTerm &&
          title
            .filter((t) => t.primaryTitle.toLowerCase().includes(searchTerm.toLowerCase()))
            .slice(0, 3)
            .map((t, i) => (
              <p key={i} onClick={() => handleTitleClick(t.primaryTitle)} className="listItem">
                {t.primaryTitle || t.primary_title}
              </p>
            ))}
      </div>
    </div>
    // </div>
  );
}

export default Search3;
