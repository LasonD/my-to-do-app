import React from "react";
import { Form, Input, Button } from "antd"

export const ToDoForm = props => {

    const { handleSubmit } = props;

    const onFinish = (values) => {
        if (handleSubmit) {
            handleSubmit(values.name);
        }
    }

    return (
        <Form className="todo-form" form={form} layout={'inline'} onFinish={onFinish}>
            <Form.Item name="name" className="todo-form-input">
                <Input placeholder={'New todo'} />
            </Form.Item>
            <Form.Item name="name" className="todo-form-actions">
                <Button htmlType="submit" type="primary" >Add</Button>
            </Form.Item>
        </Form>
    );
}