import React from "react";
import { Checkbox, Button } from "antd";

export const ToDoItem = ({ item, handleCheck, handleRemove }) => {
    const {checked, name, id} = item;

    const onCheckItem = () => handleCheck(id);

    const onRemoveItem = (event) => {
        event.preventDefault();
        handleRemove(id);
    }

    return (
        <li className="todo-item" key={id}>
            <Checkbox checked={checked}>{name}</Checkbox>
            <Button>Remove</Button>
        </li>
    );
}