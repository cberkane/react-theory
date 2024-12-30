export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchTodos(): Promise<Response> {
    await delay(2000);
    return fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
}

export async function fetchPosts(): Promise<Response> {
    return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
}

export async function addTodo(data: Record<string, string | number | boolean>): Promise<Response> { // corriger any
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json())
}