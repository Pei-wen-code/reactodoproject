import { useState, useEffect, useRef } from 'react';
import useInput from './useInput';

function writeTodosToLocalStorage(todos) {
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

export default function useTodos() {
    const id = useRef(1);
    const { value, setValue, handleChange } = useInput();
    const [todos, setTodos] = useState(() => {
        let todoData = window.localStorage.getItem("todos") || "";
        if (todoData.length > 2) {
            todoData = JSON.parse(todoData);
            id.current = todoData[0].id + 1;
        } else {
            todoData = [];
        }
        return todoData;
    });

    const handleButtonClick = () => {
        setTodos([
            {
            id: id.current,
            content: value
            }, 
            ...todos,
        ]);
        setValue('')
        id.current++
    };

    const handleToggleIsDone = (id) => {
        setTodos(
            todos.map((todo) => {
            if (todo.id !== id) return todo
            return {
                ...todo,
                isDone: !todo.isDone,
            };
            })
        );
    };

    const handleDeleteTodo = id => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    
    useEffect(()=> {
        writeTodosToLocalStorage(todos);
    }, [todos]);

    return {
        todos,
        setTodos,
        id,
        handleButtonClick,
        handleToggleIsDone,
        handleDeleteTodo,
        value, 
        setValue, 
        handleChange
    }
}