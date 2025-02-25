import { FC, useState, useEffect, useRef } from "react";

const UseRefTimer: FC = () => {
    console.log("UseRefSimple render...");

    const [isRunning, setRunning] = useState(true);
    const [time, setTime] = useState(0);
    const timerId = useRef(undefined!);

    const toggleTimer = () => {
        setRunning((prev) => !prev);
    };

    useEffect(() => {
        if (isRunning) {
            timerId.current = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        }
        return () => {
            // timerId will be lost without useRef here
            clearInterval(timerId.current);
        };
    }, [isRunning]);

    return (
        <div>
            <h1>UseRefSimple</h1>
            <p>Time is {time}</p>
            <button onClick={toggleTimer}>
                {isRunning ? 'Stop' : 'Reprendre'}
            </button>
        </div>
    );
}

export default UseRefTimer;