import React from "react";

const ToDoList = (props) => {

    return (

       <>
            <li>{props.text}
                <span><i className="fas fa-backspace" onClick={()=>
                {
                    props.onSelect(props.id);
                }}/></span>
            </li>
       </>
    );

}

export default ToDoList;