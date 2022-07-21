import React, {useState} from "react";



const Accor=(props)=>
{
    let [Hide, setHide]=useState(false);

    const HideShow=()=>
        {
            
            setHide(!Hide);
        }

    return(
        <>
                <div className="ques">
                    <p className="symbol px-2" onClick={HideShow}>{!Hide ? "➕" : "➖"}</p>
                    <p className="q">{props.question}</p>
                </div>
               {Hide &&  <p className="ans text-center">{props.answer}</p> }
            
        </>
    )
}

export default Accor;