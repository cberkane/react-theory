import { create } from "zustand";
import { Todo } from "shared";

interface TodoStore {
	todos: Todo[];
	addTodo: (todo: Omit<Todo, "id">) => void;
	toggleTodo: (id: number) => void;
	updateTodo: (id: number, todo: Partial<Todo>) => void;
	deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
	todos: [],
	addTodo: (todo) => set(({ todos }) => ({ todos: [...todos, { id: Date.now(), ...todo }] })),
	toggleTodo: (id) =>
		set(({ todos }) => {
			const todo = todos.find((t) => t.id === id);
			if (todo) todo.completed = !todo.completed;
			return { todos: [...todos] };
		}),
	updateTodo: (id, todo) =>
		set(({ todos }) => {
			const index = todos.findIndex((t) => t.id === id);
			if (index !== -1) todos[index] = { ...todos[index], ...todo };
			return { todos: [...todos] };
		}),
	deleteTodo: (id) => set(({ todos }) => ({ todos: todos.filter((t) => t.id !== id) })),
}));
