import { FC } from "react";
import UserefRefetch from "./UserefRefetch";

const UserefRefetchParent: FC = () => {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe' },
        { id: 3, name: 'Jane' },
        { id: 4, name: 'Smith' },
    ];

    return (
        <div>
            <h1>UserefRefetchParent</h1>
            {users.map(user => (
                <UserefRefetch userId={user.id} />
            ))}
        </div>
    );
}

export default UserefRefetchParent;