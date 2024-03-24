import './List.css';
import Item from './Item';

const List = ({ todos, complete }) => {
	if (todos.length === 0) {
		return <div className="no-todos">Nothin toDo!^O^</div>;
	}

	return (
		<div className="todo-list">
            <ul>
                {todos.map((todo, i) => {
                    return <Item key={i} text={todo} complete={complete}/>
                })}
            </ul>
		</div>
	);
};

export default List;
