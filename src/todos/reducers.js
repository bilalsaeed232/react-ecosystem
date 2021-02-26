import { 
    CREATE_TODO, 
    MARK_TODO, 
    REMOVE_TODO,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_FAILURE
 } from "./actions";

export const todos = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO: { 
            const { text } = payload;

            const newTodo = {
                text,
                isCompleted: false
            };

            return state.concat(newTodo);
        }
    
        case REMOVE_TODO: {
            const {text}  = payload;
            return state.filter( todo => todo.text !== text);           
        }

        case MARK_TODO: {
            const {text} = payload;
            return state.map(todo => {
                if(todo.text === text) { // more like a toggle so that this action can be used in future as well
                    todo.isCompleted = !todo.isCompleted
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