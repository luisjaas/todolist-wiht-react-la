import React, { useState } from "react";
import { Task } from "./Task.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [tasks, setTasks] = useState( ["walk dog", "workout" ] );
	const [taskName, setTaskName] = useState("");



	return (
		<>
			<div className="container">
				<input 
					id="notas"
					type="text"
					onKeyDown={(e) => {if(e.key==="Enter" && taskName !== "") {
						setTasks([...tasks,taskName]);
						setTaskName("")
					}}} 
					onChange={(event) => setTaskName(event.target.value)}
					value={taskName}
					placeholder="write tasks" >
				</input>

				{tasks.length == 0 
				? <h2>No tasks, add a task</h2>
				: null 
			 }

				{tasks.map((task, index) => {
					return(
						<Task task={task} key={index} tasks={tasks} setTasks={setTasks} id={index}/>
					)
				})}
				<hr></hr>
				<p id="pendientes">{tasks.length} Pending Task</p>
			</div>
		</>
	)
};

export default Home;
