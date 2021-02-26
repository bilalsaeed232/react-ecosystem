import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure, createTodo, removeTodo } from "./actions";

export const displayAlert = (e) => () => {
    alert(e);
}

export const loadTodos = () => async (dispatch, getState) => {
    //api call here
    try {    
        dispatch(loadTodosInProgress());
        
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        
        dispatch(loadTodosSuccess(todos));
    } catch(e) {
        dispatch(loadTodosFailure(e));
        dispatch(displayAlert(e)); //for now just an alert is enough
    }
}

export const addTodoRequest = (text) => async (dispatch) => {
    //sends a post request to the API with new todo text
    const body = JSON.stringify({text});
    try {
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "post",
            body
        });
        const todo = await response.json();

        dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const deleteTodoRequest = (id) => async (dispatch) => {
    //send a DELETE request with the corresponding TODO id to the server
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: "delete"
        });

        const todo = await response.json();
        dispatch(removeTodo(todo));
    } catch (error) {
        dispatch(displayAlert(error));       
    }
}