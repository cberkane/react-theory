import { FC, useEffect } from "react";
import { useApiTodoStore } from "./store/api-todo.store";

const Api: FC = () => {

    const { todos, loading, error, getTodos } = useApiTodoStore();

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="b">
            <h1>Zustand + API</h1>
            {loading &&
                <p>Loading...</p>
            }
            {todos.length !== 0 &&
                <div>
                    {todos.map(todo => <li>{todo.title}</li>)}
                </div>
            }
            {error &&
                <p>{error}</p>
            }
        </div>
    );
}

export default Api;