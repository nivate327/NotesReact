import React from "react";
import { useState } from "react";

const IncreDecre=()=>
{
    const [state, setState] = useState(0);

    const Incre = () => {
        setState(state + 1);
    }

    const Decre = () => {
        if (state <= 0) {
            alert("we cannot show number before 0");
        } else {
            setState(state - 1);
        }
    }
  

    return(
        <>
            <h1>{state}</h1>
            <div className="box d-flex">
                <button onClick={Incre}>Incre</button>
                <button onClick={Decre}>Incre</button>
            </div>
        </>
    )
}

export default IncreDecre;