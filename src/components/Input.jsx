import './Input.css';

const Input = ({todo,setTodo,addTodo,addTodoEnterKey}) => {


	return (
		<div className="Input">
			<input
				type="text"
				className="Input-field"
				name="todo"
				placeholder="Create a Todo!"
				onChange={(event) => setTodo(event.target.value)}
                value={todo}
                onKeyPress={addTodoEnterKey}
			/>
            <button className="add-button" onClick={() => addTodo()} >ADD</button>
		</div>
	);
};

export default Input;
