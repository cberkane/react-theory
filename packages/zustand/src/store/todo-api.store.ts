import { delay, fetchTodos, Todo } from "shared";
import { create } from "zustand";

interface ApiTodoStore {
	todos: Todo[];
	loading: boolean;
	error: string;
	getTodos: () => void;
}

export const useApiTodoStore = create<ApiTodoStore>((set) => ({
	todos: [],
	loading: false,
	error: undefined!,
	getTodos: async () => {
		set({ loading: true });
		await delay(2000);
		fetchTodos()
			.then((payload) => payload.json())
			.then((todos) => set({ todos }))
			.catch((err) => set({ error: err.message }))
			.finally(() => set({ loading: false }));
	},
}));
