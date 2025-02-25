import { FC, useCallback } from "react";
import CallbackChild from "./CallbackChild";

const CallbackParent: FC = () => {
    console.log("CallbackParent render...");

    const handleClick = useCallback(() => {
        console.log("Clicked on it");
    }, []);

    return (
        <div>
            <h1>CallbackParent</h1>
            <p>Check the console for logs</p>
            <CallbackChild onClick={handleClick} />
        </div>
    );
};

export default CallbackParent;