import React, { useEffect, useState } from "react";

function Search() {
    const titleUrl = "http://localhost:5001/api/titles?page=0&pageSize=1000";
    const nameUrl = "http://localhost:5001/api/names?page=0&pageSize=1000";
    const urls = [titleUrl, nameUrl];

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        Promise.all(
            urls.map(url =>
                fetch(url)
                    .then(res => res.json())
                    .then(data => data.items)
                    .catch(err => {
                        console.log(err);
                    })
            )
        ).then(items => {
            setData([].concat(...items));
        });
    }, []);

    return (
        <div>
            <h1>Search for Person</h1>
             <input
                type='text'
                placeholder='Search'
                value={searchTerm}
                onChange={handleChange}>
            </input>
            {searchTerm && data
            .filter( i => i.primaryTitle?.includes(searchTerm) || i.name?.includes(searchTerm) )
            .slice(0, 3)
            .map((i, index) => (
                <div key={index}>
                    <p>{i.primaryTitle || i.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Search;