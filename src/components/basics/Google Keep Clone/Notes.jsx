import React, { useState } from "react";
import Navbar from "./Navbar";
import CreateNote from "./CreateNote";
import Allnotes from "./Allnotes";

const Notes = () => {
    const [items, setItems] = useState([]);

    const add = (note) => {


        setItems((old) => {
            return [...old, note];
        })
    }

    const Deletenote=(id)=>
    {
        setItems((olddata)=>
        {
           return olddata.filter((elem, indx)=>
            {
                return indx!==id;
            })
        });
    }


    return (
        <>
            <Navbar />
            <CreateNote propsAdd={add} />
           
            <div className="allnotes container">
                <div className="row">
                 {
                    items.map((val, index)=>
                    {
                    return <Allnotes title={val.title} notes={val.noteText} key={index} id={index} DeleteItem={Deletenote}/>
                    })
            
                 }
                </div>
            </div>
        </>
    )
}

export default Notes;

