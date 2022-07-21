import React from "react";
import Card from "./Cards";
import Arr from "./Arr";


const Netflix =()=>
{
    
    return (
        <>
          <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
            <div className="mycards mx-4 my-4">
            <Card title={Arr[0].title} imgsrc={Arr[0].imgsrc} text={Arr[0].text} />
            </div>
            
          </div>
        </>
      )
}

export default Netflix;