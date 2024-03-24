import { useState } from 'react';
import Input from './Input';
import List from './List';
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

	const complete = (text) => {
		const uncompletedTodos = todos.filter((todo) => todo !== text)
		setTodos(uncompletedTodos)
	}
	
	const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTodo()
        }
    }

	return (
		<div className="app">
			<h1 className='app-title'>ToDo List >:3</h1>
			<Input todo={todo} setTodo={setTodo} addTodo={addTodo} addTodoEnterKey={handleKeyPress} />
			<List todos={todos} complete={complete} />
			
		</div>
	);
}

export default App;
