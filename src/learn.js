import React, {useState} from 'react';


function Version(){
    const [arr, setArr] = useState([]);
    const addvar = (event) =>{
        setArr([...arr, event.target.value])
    }
    
    return(
        <div>
            <p>{arr}</p>
            <input onChange={addvar} />
        </div>
    )
}

export default Version;