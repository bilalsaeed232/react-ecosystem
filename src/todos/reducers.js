import { 
    CREATE_TODO, 
    UPDATE_TODO, 
    REMOVE_TODO,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_FAILURE
 } from "./actions";


/* out state
 state.todos = {
    data: [...]
    isLoading: false
}
*/

const initialState = {
    data: [],
    isLoading: false
}

export const todos = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO: { 
            const { todo } = payload;
            return {
                ...state,
                data: state.data.concat(todo)
            }
        }
    
        case REMOVE_TODO: {
            const {todo}  = payload;
            return {
                ...state,
                data: state.data.filter( t => t.id !== todo.id)
            }           
        }

        case UPDATE_TODO: {
            const {todo: todoToUpdate} = payload;
            return {
                ...state,
                data: state.data.map(todo => {
                        if(todo.id === todoToUpdate.id) { // more like a toggle so that this action can be used in future as well
                            return todoToUpdate;
                        }
                        return todo;
            })}
        }

        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            
            return {
                ...state,
                isLoading: false,
                data: todos
            };
        }
        
        case LOAD_TODOS_IN_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOAD_TODOS_FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;            
    }
}

