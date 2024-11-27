import React, { useState } from "react";

export default function Routing(){
    const [view, setView] = useState(0);

    return (
        <>
            {view === 0 ? <Home/> : <User/>}
            <button onClick={() => setView(v => 1-v)}>
                Go to {view === 0 ? "User" : "Home"}
            </button>
        </>
    );
}

const  Home = () => <section>
    <h1>Home</h1>
</section>;


const User = () => <section>
    <h1>User</h1>
</section>;