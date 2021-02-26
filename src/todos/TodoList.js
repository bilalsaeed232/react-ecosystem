import React, { useEffect } from "react";
import { connect } from "react-redux";

import TodoListItem from "./TodoListItem";
import NewTodoForm from './NewTodoForm';

import { getTodos, getTodosLoading } from "./selectors";
import { deleteTodoRequest, loadTodos, updateTodoRequest } from './thunks';

import './TodoList.css';

const TodoList = ( { todos = [], onRemovePressed, onMarkPressed, startLoadingTodos, isLoading } ) => {
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
    todos: getTodos(state),
    isLoading: getTodosLoading(state)
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(deleteTodoRequest(text)),
    onMarkPressed: id => dispatch(updateTodoRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
