
import { FC, FormEvent } from "react";
import { useTodoStore } from "./store/todo.store"

const Todo: FC = () => {

    const { todos, addTodo, deleteTodo, toggleTodo } = useTodoStore();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        addTodo({
            userId: +data.get('userId')!,
            title: data.get('title')!.toString(),
            completed: false,
        });
    }

    return (
        <div>
            <h1>Zustand Todo</h1>

            <div style={{ marginBottom: '12px' }}>
                {todos.map(todo =>
                    <li key={todo.id} style={{ listStyle: 'none' }}>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        {todo.title}
                        <span style={{ padding: '0 24px', cursor: 'pointer', color: 'red' }} onClick={() => deleteTodo(todo.id)}>x</span>
                    </li>
                )}
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Titre" />
                    <input type="number" name="userId" placeholder="Utilisateur" />
                    <button type="submit">Ajouter</button>
                </form>
            </div>

        </div>
    );
}

export default Todo;
