import { FC, useReducer } from "react";

interface User {
    id: number;
    name: string;
}

type UserAction =
    { type: 'ADD_USER', user: User } |
    { type: 'REMOVE_USER', id: number };

const initialState = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
    { id: 3, name: 'Jane' },
    { id: 4, name: 'Smith' },
];

const usersReducer = (state: User[], action: UserAction) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.user];
        case 'REMOVE_USER':
            return state.filter((user: User) => user.id !== action.id);
        default:
            return state;
    }
};

const UseReducerSimple: FC = () => {
    console.log('UseReducerSimple render...');

    const [users, dispatch] = useReducer(usersReducer, initialState);
    const removeUser = (id: number) => dispatch({ type: 'REMOVE_USER', id });
    const addUser = (user: User) => dispatch({ type: 'ADD_USER', user });

    const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        addUser({ id: users.length + 1, name: formData.get('userName') as string });
    };

    return (
        <div>
            <h1>UseReducerSimple</h1>
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name}
                            <button onClick={() => removeUser(user.id)}>x</button>
                        </li>
                    ))}
                </ul>
                <form onSubmit={handleAddUser}>
                    <input type="text" name="userName" placeholder="User name" />
                    <button type="submit">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default UseReducerSimple;