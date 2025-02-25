import { FC, useState, useMemo } from "react";

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
    { id: 3, name: 'Jane' },
    { id: 4, name: 'Smith' },
];

const sortUsers = (users: { id: number; name: string }[], filter: string) => {
    console.log('Sorting users...');
    return users
        .filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name));
}

/*
 * useMemo: pour éviter de recalculer la liste des utilisateurs, si le filtre ne change pas
 */
const MemoFilter: FC = () => {
    console.log('MemoFilter render...');

    const [filter, setFilter] = useState('');
    const sortedUsers = useMemo(() => sortUsers(users, filter), [filter]);

    return (
        <div>
            <h1>MemoFilter</h1>
            <input
                type="text"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="Filter users..."
            />
            {
                <ul>
                    {sortedUsers.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default MemoFilter;