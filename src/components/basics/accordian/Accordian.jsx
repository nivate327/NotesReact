import React, { useState } from "react";
import Ques from "./AllQues";
import Accor from "./Accor";

const Accordian =()=>
{
    const [allQues, setQues]=useState(Ques);
    

    

    return(
        <>
           <div className="container">
            <h1 className="text-center my-5">React Interview Questions</h1>
            <div className="box">
            {
                allQues.map((curElem)=>
                {   
                    let {id, question, answer}=curElem;
                    return(<>
                            
                                <Accor key={id} question={question} answer={answer} />
                             
                            </>
                        )
                })
            }
            </div>
            </div>
            

        </>
    )
}

export default Accordian;