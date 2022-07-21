import React from "react";
import ToDoList from './ToDoList';
import { useState } from 'react';

const Todo=()=>
{

    const [task, setTask] = useState("");
  const [items, setItems] = useState([]);




  const addTask = () => {
    setItems((oldItems) => {
      return [...oldItems, task];

      
    })

    setTask("");
  }

  const change = (event) => {
    setTask(event.target.value);
  }

  const deleteItem=(id)=>
  {
    setItems((oldItems)=>
    {
      return oldItems.filter((item, index)=>
      {
        return index !== id;
      })
    })
  }


    return(
        <>
            <div className="container todolist">
        <div className="todo">
          <h1 className="text-center">To Do List</h1>
          <div className="box">
            <input type="text" name="todo" id="todo" placeholder='Add Item' onChange={change} value={task} className="form-control" />
            <button className='btn add' onClick={addTask}> + </button>
          </div>


          <div className="alltask">
            {
              items.map((itemval, index) => {


                return (

                  <ol>
                    <ToDoList text={itemval} key={index} id={index} onSelect={deleteItem}/>
                  </ol>
                );


              })

            }
          </div>
        </div>


      </div>
        </>
    )
}

export default Todo;