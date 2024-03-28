import { useState } from "react";

function Todo(){
   const [tinput, settinput] = useState("")
   const [todoitems, settodoitems] = useState([])

   function changeInput(event){
    console.log(event.target.value, "event");
    settinput(event.target.value);
   }
   console.log(todoitems)
   const addvalue = ()=>{
    settodoitems([...todoitems, tinput]);
    settinput("")
   };
   const handleDelete = (index)=>{
    console.log(index, "17")
    todoitems.filter((item, index)=>{

    })
   }
   console.log(todoitems, "14")
    return (
        <>
        <input type="text" value={tinput} onChange={changeInput} placeholder="Enter Todo list" />
        <button id="add" onClick={addvalue}>Add</button>
        {todoitems.map((items, index)=>{
            console.log(items, index, "map");
            return(
                <div key={index} style={{display: "flex"}}>
                <p>{items}</p>
                <button id="remove" onClick={(()=>{handleDelete(index)})}>Remove</button>
                </div>
            )
        })}
        
        </>
    )
}
export default Todo;

