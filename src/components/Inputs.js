import { useState } from 'react';

function Inputs(type) {

  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }

    return (
        <div>
        <h3>{text}</h3>
        <input onChange={handleChange} />
        </div>
        )
 }
  
export default Inputs;