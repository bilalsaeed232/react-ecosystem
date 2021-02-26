import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from "./actions";

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