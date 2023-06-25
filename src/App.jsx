import "./styles.css"
import {useEffect, useState} from "react";
import { NewToDoForm } from "./NewToDoForm.jsx";
import {ToDoList} from "./ToDoList.jsx";

export function App() {
    const [todos, setToDos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue === null) return [];
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id, completed) {
        setToDos(todos => {
            return todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed };
                }
            });
        });
    }

    function addTodo(title) {
        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false,
        };

        setToDos([...todos, newTodo]);
    }

    function deleteTodo(id) {
        setToDos(todos => {
            return todos.filter(todo => todo.id !== id);
        });
    }

    return (
        <>
            <NewToDoForm onSubmit={addTodo} deleteTodo={deleteTodo}/>
            <h1 className="header">To Do List</h1>
            <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </>
    );
}

export default App;