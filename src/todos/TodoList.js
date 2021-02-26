import React, { useEffect } from "react";
import { connect } from "react-redux";

import TodoListItem from "./TodoListItem";
import NewTodoForm from './NewTodoForm';

import { removeTodo, markTodo } from "./actions";
import { deleteTodoRequest, loadTodos } from './thunks';

import './TodoList.css';

const TodoList = ( { todos = [ ], onRemovePressed, onMarkPressed, startLoadingTodos, isLoading } ) => {
    useEffect(() => {
        startLoadingTodos();
    },[])

    const loadingContent = <div>Loading...</div>
    const content = (<div className="list-wrapper">
        <NewTodoForm /> 
        {todos.map((todo, i) => 
        <TodoListItem 
            key={i}
            todo={todo} 
            onRemovePressed={onRemovePressed} 
            onMarkPressed = {onMarkPressed}
        />)}
    </div>)

    return isLoading ? loadingContent: content;
}

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(deleteTodoRequest(text)),
    onMarkPressed: text => dispatch(markTodo(text)),
    startLoadingTodos: () => dispatch(loadTodos())

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
