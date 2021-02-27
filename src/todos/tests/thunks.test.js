import { expect } from "chai";
import sinon from "sinon";
import 'node-fetch';
import fetchMock from "fetch-mock";

import { addTodoRequest, loadTodos } from "../thunks";

describe("The loadTodos thunk", () => {
    it("Calls the necessary actions in case of success scenario", async () => {
        const fakeDispatch = sinon.spy();

        const fakeTodos = [{text:"todo 1"},{text:"todo 2"}]

        const fakeFetch = fetchMock.get("http://localhost:8080/todos", fakeTodos);

        const expectedFirstAction = { type: "LOAD_TODOS_IN_PROGRESS" };
        const expectedSecondAction = { type: "LOAD_TODOS_SUCCESS", payload: {todos: fakeTodos}  }

        await loadTodos()(fakeDispatch);

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction)
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction)


        fakeFetch.reset();
    });
});

describe("The addTodoRequest thunk", () => {
    it("Calls the necessary action in sucess scenario", async () => {
        const fakeDispatch = sinon.spy();

        const fakeTodo = { text: "new todo" }

        const fakeFetch = fetchMock.post("http://localhost:8080/todos", JSON.stringify(fakeTodo));
        
        fakeFetch.config.sendAsJson = true;

        await addTodoRequest("new todo")(fakeDispatch);

        const expectedAction = { type: "CREATE_TODO", payload: { todo: fakeTodo } }


        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedAction);

        fakeFetch.reset();
    });
});
