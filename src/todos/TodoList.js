import React from "react";
import { connect } from "react-redux";

import TodoListItem from "./TodoListItem";
import NewTodoForm from './NewTodoForm';

import { removeTodo, markTodo } from "./actions";

import './TodoList.css';

const TodoList = ( { todos = [ { text: 'run' } ], onRemovePressed, onMarkPressed } ) => (
    <div className="list-wrapper">
        <NewTodoForm /> 
        {todos.map((todo, i) => 
        <TodoListItem 
            key={i}
            todo={todo} 
            onRemovePressed={onRemovePressed} 
            onMarkPressed = {onMarkPressed}
        />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkPressed: text => dispatch(markTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
