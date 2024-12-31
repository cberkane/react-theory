export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function fetchTodos() {
    await delay(2000);
    return fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
}
export async function fetchPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
}
export async function addTodo(data) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
}
