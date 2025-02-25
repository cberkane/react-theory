import { FC, useState, useRef, useEffect } from "react";

// Fake user API
const fetchUser = async (): Promise<{ id: number, name: string }> => {
    return new Promise((resolve) => resolve({ id: 2, name: 'Chihab' }));
};

interface UserefUserProps {
    userId: number;
}

const UserefRefetch: FC<UserefUserProps> = ({ userId }) => {

    const [userData, setUserData] = useState<{ id: number, name: string }>(null!);
    const lastUserIdRef = useRef(userId);

    useEffect(() => {
        if (lastUserIdRef.current === userId) return;

        fetchUser().then(user => setUserData(user));
    }, [userId]);

    return (
        <div>
            <h1>UserefUser</h1>
            {userData ? <p>{userData.name}</p> : <p>Loading...</p>}
        </div>
    );
}

export default UserefRefetch;