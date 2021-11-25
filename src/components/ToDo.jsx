import React, { useState } from 'react';
import { Button, Card, Checkbox, Divider } from "antd";
import { ToDoItem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';
export const ToDo = () => {

    const [todos, setTodos] = useState([
        {id: 1, name: "some", checked: false},
        {id: 2, name: "another one", checked: false},
    ]);

    const [idCount, setIdCount] = useState(10);

    const handleCheck = (id) => {
        const index = todos.findIndex(item => item.id === id);
        if (index !== -1) {
            const item = todos[index];
            item.checked = !item.checked;
            todos.splice(index, 1, item);
            setTodos([...todos]);
        }
    }

    const handleRemove = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    const handleSubmit = (name) => {
        const newItem = {
            id: idCount,
            name,
            checked: false,
        };
        setTodos([...todos, newItem]);
        setIdCount(idCount + 1);
    }

    const renderToDoItems = (todos) => {
        const items = todos.map((todo) => <ToDoItem key={todo.id} item={todo} handleRemove={handleRemove} handleCheck={handleCheck}/>);
        return <ul className="todo=list">{items}</ul>;
    };


    return (
        <Card title={'My todos'}>
            <ToDoForm handleSubmit={handleSubmit}/>
            <Divider/>
            {renderToDoItems(todos)}
        </Card>
    );
};