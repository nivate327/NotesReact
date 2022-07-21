import React from "react";
import Card from "./Cards";
import Arr from "./Arr";


const Amzon =()=>
{
    
    return (
        <>
          <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
            <div className="mycards mx-4 my-4">
            <Card title={Arr[1].title} imgsrc={Arr[1].imgsrc} text={Arr[1].text} />
            </div>
            
          </div>
        </>
      )
}

export default Amzon;