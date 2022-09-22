import React from "react";

export const Task = (props) => {
    return(
        <div className="tarea">
            <p>
               {props.task} 
            </p>
            
            <button
                onClick={(event) => {
                    props.setTasks(props.tasks.filter((task,index) => index !== props.id))
                }} 
                ><i class="fa-solid fa-xmark text-white"></i></button>
        </div>
    )
}