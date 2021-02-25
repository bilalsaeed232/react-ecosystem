import React, { useState } from 'react';
import { connect } from "react-redux";

import { createTodo } from "./actions";
import './NewTodoForm.css';

export const NewTodoForm = ( {todos=[], onCreateTodo} ) => {
    const [ inputValue, setInputValue ] = useState()
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
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreateTodo: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);