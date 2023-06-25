import {ToDoItems} from "./ToDoItems.jsx";

export function ToDoList( {todos, toggleTodo, deleteTodo}){
    return (
        <ul className="list">
            {todos.length === 0 && 'No todos'}
            {todos.map(todo => {
                return (
                    <ToDoItems
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}