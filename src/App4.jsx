import { useState, useEffect } from "react";
import  "./App.css";


const URL =  "https://randomuser.me/api/?results=";

function App4(){
    
    const [count, setCount] = useState(1);
    console.log(count)
    const [users, setUsers] = useState([]);
    const [access, setAccess] = useState(0);

    useEffect(() => {
        async function load(){
            const res = await fetch(URL + count);
            const data = await res.json();
            setUsers(data.results);
            setAccess(a => a + 1)
        }
        load();
    }, [count]);


    const add = () => setCount(c => c+1)
    return(
        <>
        {users.map( (u,i) => (
            <div key={i}>
                <p>{u.name.first}</p>
            </div>
        ))}
        <button onClick={add}>Add user</button>
        {access}
        </>
    );
}

export default App4;