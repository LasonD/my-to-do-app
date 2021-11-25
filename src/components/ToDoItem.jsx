import React from 'react';
import { Checkbox, Button } from 'antd';

export const ToDoItem = ({item, handleCheck, handleRemove}) => {
    const { checked, name, id } = item;

    const onChangeItem = () => handleCheck(id);

    const onRemoveItem = (event) => {
        event.preventDefault();
        handleRemove(id);
    }
    return (
        <li className="todo-item">
            <Checkbox checked={checked} onChange={onChangeItem}>{name}</Checkbox>
            <Button onClick={onRemoveItem}>Remove</Button>
        </li>
    );
}