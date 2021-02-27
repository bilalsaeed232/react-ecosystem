import { expect } from 'chai';

import { getCompletedTodos, getIncompleteTodos } from "../selectors";

describe("The getCompletedTodos selector", () => {

    it("should return only the completed todos", () => {
        const fakeTodos = [
            { text: "todo 1", isCompleted: false },
            { text: "todo 2", isCompleted: true },
            { text: "todo 3", isCompleted: false },
        ];

        const expected = [ { text: "todo 2", isCompleted: true } ];

        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    })
});

describe("The getIncompleteTodos selector", () => {

    it("should return only the incompleted todos", () => {
        const fakeTodos = [
            { text: "todo 1", isCompleted: false },
            { text: "todo 2", isCompleted: true },
            { text: "todo 3", isCompleted: false },
        ];

        const expected = [ 
            { text: "todo 1", isCompleted: false },
            { text: "todo 3", isCompleted: false } 
        ];

        const actual = getIncompleteTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    })
});