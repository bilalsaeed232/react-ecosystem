import { expect } from "chai";
import { todos } from "../reducers";


describe("The Todos Reducer", ()=> {
    it("Adds a new Todo with CREATE_TODO action is received", () => {
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
    })
})