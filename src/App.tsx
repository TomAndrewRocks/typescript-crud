import React, { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import './styles/styles.css'
import { ITask } from "./types/task";

function App() {

	const [task, setTask] = useState("");
	const [list, setList] = useState<ITask[]>([]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTask(e.target.value)
	};

	const handleAddTask = () => {
		const randomize = (num: number) => Math.floor(Math.random() * num)

		const newTask = { id: randomize(99999999999), title: task }

		setList([...list, newTask])
	};

	const handleDelete = (DeleteById: number) => {
		setList(list.filter((item) => item.id !== DeleteById))
	};

	return (
		<div className="App">

			<header>

				<h2>Lists</h2>

				<input
					type="text" autoComplete="off"
					placeholder="Escrever task..."
					name="task"
					className="input"
					value={task}
					onChange={handleChange}
				/>

				<button type="submit" className="btn-header" onClick={handleAddTask}>Adicionar Task</button>
			</header>

			<div className="line"></div>

			{list.map((task, key) => (
				<TodoTask key={key} props={task} deleteTask={handleDelete} />
			))}
		</div>
	);
}

export default App;
