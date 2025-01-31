import { FC, useEffect } from "react";
import { useApiTodoStore } from "./store/todo-api.store";

const Api: FC = () => {

    const { todos, loading, error, getTodos } = useApiTodoStore();

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="b">
            <h1>Zustand with API</h1>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {todos.length !== 0 &&
                <ul>
                    {todos.map(todo => <li>{todo.title}</li>)}
                </ul>
            }
        </div>
    );
}

export default Api;