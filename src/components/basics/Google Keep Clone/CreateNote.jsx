import React, { useState } from "react";


const CreateNote=(props)=>
{
    const [note, setNotes]=useState(
        {
            title: "",
            noteText: "",
        });

    const [expand, setExpand]=useState(false);

    
        const changeInput=(event)=>
        {
            let {name, value}=event.target;
    
            setNotes((old)=>
            {
                return{
                    ...old,
                    [name]:value,
    
                }
            })
        }
    
        const addNote=(event)=>
        {
            event.preventDefault();
            
            props.propsAdd(note);
        }

        const expandIt=()=>
        {
            setExpand(true);
        }
        
        const bcNormal=()=>
        {
            setExpand(false);
        }

    return(
        <>
            <div className="main-container">
                
                    <form className="py-3">
                       { expand ? <div className="form-group">
                            <input type="text" value={note.title} name="title" onChange={changeInput} className="form-control" id="entertitle" placeholder="Enter Title"/>
                        </div>: null}

                        <div className="form-group">
                            <textarea name="noteText" onChange={changeInput} value={note.noteText} onDoubleClick={bcNormal}  onClick={expandIt} className="form-control" id="" placeholder="Enter Notes" cols="37" rows="4"></textarea>
                        </div>

                       {expand ? <button className="btn" onClick={addNote}><i className="fa-solid fa-plus"></i></button> : null}
                    </form>
                
           </div>
        </>
    )
}

export default CreateNote;

