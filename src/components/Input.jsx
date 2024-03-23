import './Input.css';

const Input = ({todo,setTodo,addTodo}) => {
	return (
		<div className="Input">
			<input
				type="text"
				className="Input"
				name="todo"
				placeholder="Create a Todo"
				onChange={(event) => setTodo(event.target.value)}
                value={todo}
			/>
            <button className="add-button" onClick={() => addTodo()}>ADD</button>
		</div>
	);
};

export default Input;
