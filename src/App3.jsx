import { useState } from "react";

const Display = ({theThing}) => <b>{theThing }</b>

const Button = ( {increment} ) => <button onClick={ (e1) =>  increment() }> Increment </button>

function App3(){
    const [val, setVal] = useState(0);

    return (
        <div>
            <Display theThing={val + 10}/>
            <Button increment={ () => {setVal( val => val + 1);setVal( val => val + 1);} }/>
        </div>
    );
}

export default App3;