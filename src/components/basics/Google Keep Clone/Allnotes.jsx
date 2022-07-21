import React from "react";
import Navbar from "./Navbar";

const Allnotes = (props) => {

    const Delete=()=>
    {
        props.DeleteItem(props.id);
        
    }

    return (
        <>
                      <div className="col-xl-3 col-lg-3 col-sm-6 col-md-4 col-12 items">
                                    <div className="notesBox">
                                        <h3 className="title">{props.title}</h3>
                                        <div className="textNotes">
                                            <p>{props.notes}</p>
                                        </div>
                                        
                                        <i class="fa-solid fa-trash fx-1" onClick={Delete}></i>
                                       
                                    </div>
                                    
                     </div>
                            
                
        </>
    )
}
export default Allnotes;