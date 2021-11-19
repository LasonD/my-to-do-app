import React, { useState } from "react";
import { Card } from "antd";
import { ToDoItem } from "./ToDoItem";

export const ToDo = () => {
    const [todos, setTodos] = useState([
        { id: 1, name: "some", checked: false },
        { id: 2, name: "another one", checked: false },
    ]);

    const [idCount, setIdCount] = useState(10);

    const handleRemove = (id) => setTodos(todos.filter(todo => todo.id !== id));

    const handleSubmit = (name) => {
        const newItem = {
            id: idCount,
            name,
            checked: false
        };
        setTodos([...todos, newItem]);
        setIdCount(idCount + 1);
    }

    const handleCheck = (id) => {
        const index = todos.findIndex(todo => todo.id === id);

        if (index < 0) return;

        const item = todos[index];

        item.checked = !item.checked;
        todos.splice(index, 1, item);
        setTodos([...todos]);
    }

    const renderToDoItems = (todos) => {
        const items = todos.map(todo => (
        <ToDoItem key={todo.id} 
        item={todo} 
        handleCheck={handleCheck} 
        handleSubmit={handleSubmit} 
        handleRemove={handleRemove}></ToDoItem>));
        return <ul className="todo-list">{items}</ul>;
    }

    return (
        <Card title={"My todos"}>
            <p>Here we need input</p>
            {renderToDoItems(todos)}
        </Card>
    );
}