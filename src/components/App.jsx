import { useState } from 'react';
import Input from './Input'
import './App.css';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		if (todo !== "") {
			setTodos([...todos,todo])
			setTodo("")
		}
	}

	return (
		<div className="app">
			<img src="./public/techoverlogo-230116-082629.png" alt="Techover" />
			<Input todo={todo} setTodo={setTodo} addTodo={addTodo}></Input>
			<ul>
				{todos.map((todo, i) => (
					<li key={i}> {todo} </li>
				))}
			</ul>
		</div>
	);
}

export default App;
