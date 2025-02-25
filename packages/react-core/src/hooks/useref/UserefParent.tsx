import { FC, useState } from "react";
import UseRefTimer from "./UserefTimer";

const UserRefParent: FC = () => {
    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            <h1>UserRefParent</h1>
            {
                showTimer &&
                <UseRefTimer />
            }
            <button onClick={() => setShowTimer(prev => !prev)}>
                {showTimer && 'désactiver'}
                {!showTimer && 'activer'}
            </button>
        </div>
    );
}

export default UserRefParent;