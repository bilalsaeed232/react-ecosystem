import { 
    CREATE_TODO, 
    UPDATE_TODO, 
    REMOVE_TODO,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_FAILURE
 } from "./actions";

export const todos = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO: { 
            const { todo } = payload;
            return state.concat(todo);
        }
    
        case REMOVE_TODO: {
            const {todo}  = payload;
            return state.filter( t => t.id !== todo.id);           
        }

        case UPDATE_TODO: {
            const {todo: todoToUpdate} = payload;
            return state.map(todo => {
                if(todo.id === todoToUpdate.id) { // more like a toggle so that this action can be used in future as well
                    return todoToUpdate;
                }
                return todo;
            })
        }

        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            
            return todos;
        }
        
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default:
            return state;            
    }
}


export const isLoading = (state = false, action) => {
    const { payload, type } = action;
    switch (type) {
        case LOAD_TODOS_IN_PROGRESS: {
            return true;
        }

        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE: {
            return false;
        }
        default:
            return state;
    }
}