import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import TodoListItem from "./TodoListItem";
import NewTodoForm from './NewTodoForm';

import { getCompletedTodos, getIncompleteTodos, getTodos, getTodosLoading } from "./selectors";
import { deleteTodoRequest, loadTodos, updateTodoRequest } from './thunks';


const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`


const TodoList = ( { completedTodos, incompleteTodos, onRemovePressed, onMarkPressed, startLoadingTodos, isLoading } ) => {
    useEffect(() => {
        startLoadingTodos();
    },[])

    const loadingContent = <div>Loading...</div>
    const content = (<ListWrapper>
        <NewTodoForm /> 
        <h3>Incomplete:</h3>
        {incompleteTodos.map((todo, i) => 
        <TodoListItem 
            key={i}
            todo={todo} 
            onRemovePressed={onRemovePressed} 
            onMarkPressed = {onMarkPressed}
        />)}
        <h3>Completed:</h3>
        {completedTodos.map((todo, i) => 
        <TodoListItem 
            key={i}
            todo={todo} 
            onRemovePressed={onRemovePressed} 
            onMarkPressed = {onMarkPressed}
        />)}
    </ListWrapper>)

    return isLoading ? loadingContent: content;
}

const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state)
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(deleteTodoRequest(text)),
    onMarkPressed: id => dispatch(updateTodoRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
