import React, { useState } from 'react';
import { connect } from "react-redux";

import './NewTodoForm.css';
import { getTodos } from './selectors';
import { addTodoRequest } from './thunks';

export const NewTodoForm = ( {todos=[], onCreateTodo} ) => {
    const [ inputValue, setInputValue ] = useState('')
    return (
        <div className="new-todo-form">
            <input 
            className="new-todo-input"
            placeholder="Enter a todo item"
            value={inputValue}
            onChange={ e => setInputValue(e.target.value) }
            />
            <button 
                className="new-todo-button"
                onClick={
                    () => {
                        const isDuplicateText = todos.some((todo) => todo.text === inputValue );
                        if(!isDuplicateText) {
                            onCreateTodo(inputValue);
                            setInputValue('');
                        }
                    }
                }
                >Create Todo</button>
        </div>
    )
}


const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onCreateTodo: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);