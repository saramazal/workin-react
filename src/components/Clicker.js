import { useState } from 'react';

function Clicker() {

    const [counter, setCounter] = useState(0);


    function clicked() {
      setCounter(counter + 1);
    }
    return <div className="clicker">
        <h1>You clicked {counter} times</h1>
        <button onClick={clicked}>Click me!</button>
    </div>
}

export default Clicker;
