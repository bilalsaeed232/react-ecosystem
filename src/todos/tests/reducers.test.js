import { expect } from "chai";
import { todos } from "../reducers";


describe("The Todos Reducer", ()=> {
    it("Adds a new Todo when CREATE_TODO action is received", () => {
        const fakeTodo = { text: "New Todo", isCompleted: false };
        const fakeAction = { 
            type: 'CREATE_TODO',
            payload: { todo: fakeTodo }
        };

        const initialState = {
            isLoading: false,
            data: [ ]
        };

        const expected = {
            isLoading: false,
            data: [fakeTodo]
        };

        const actual = todos(initialState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });

    it("Removes the Todo when REMOVE_TODO action is received", () => {
        const fakeTodo = {
            id: "232",
            text: "I am fake",
            isCompleted: false
        }
        const fakeAction = {
            type: 'REMOVE_TODO',
            payload: {todo: fakeTodo}
        }

        const initialState = {
            isLoading: false,
            data: [{id: "123", text: "some other todo", isCompleted: false}, fakeTodo]
        }

        const expected = {
            isLoading: false,
            data: [{id: "123", text: "some other todo", isCompleted: false}]
        }

        const actual = todos(initialState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });

    it("Updates the Todo when UPDATE_TODO action is received", () => {
        const fakeTodo = {id:"232", text:"I am a fake todo", isCompleted: false};
        const fakeTodoToUpdate = {
            id: "232",
            text: "I am the updated todo",
            isCompleted: false
        }

        const fakeAction = {
            type: 'UPDATE_TODO', 
            payload: { todo: fakeTodoToUpdate}
        }

        const initialState = {
            isLoading: false,
            data: [ fakeTodo ]
        }

        const expected = {
            isLoading: false,
            data: [ fakeTodoToUpdate ]
        }

        const actual = todos(initialState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
})