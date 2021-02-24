import React from "react";

import './todos/TodoList.css';
import TodoListItem from "./TodoListItem";

const TodoList = ( { todos = [] } ) => (
    <div className="list-wrapper">
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;
