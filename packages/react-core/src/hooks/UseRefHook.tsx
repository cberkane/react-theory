import { FC, useRef, useEffect, useState, ChangeEvent } from "react";

// Stockage de valeurs persistantes entre les renders avec useRef
export const UseRefHook: FC = () => {
    console.log('UseRefHook rendering...');
    const countRef = useRef<number>(0);

    const handleClick = () => {
        countRef.current++;
        console.log(countRef.current);
    }

    return (
        <div className="max-w-lg border border-gray-300 p-4 rounded-md mx-auto mt-4">
            <h1 className="text-2xl text-center">useRef Hook</h1>
            <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md mt-4"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    );
};


// Controler un timer avec useRef
export const UseRefHookTimeout = () => {
    console.log('Component rerendering...');
    const [, setReRender] = useState<boolean>(false);

    const handleReRender = () => {
        setReRender(prev => !prev);
    }

    const stopTimer = () => {
        clearInterval(intervalId.current);
    }

    const intervalId = useRef<number>(null!);
    useEffect(() => {
        intervalId.current = window.setInterval(
            () => console.log('Polling data'),
            1000,
        );

        return () => {
            clearInterval(intervalId.current);
        };
    }, []);

    return (
        <div className="max-w-lg border border-gray-300 p-4 rounded-md mx-auto mt-4">
            <h1 className="text-2xl text-center">useRef Hook</h1>
            <p className="text-center text-sm mt-4 color-gray-600">Open console...</p>
            <div>
                <button
                    className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md mt-4"
                    onClick={handleReRender}
                >
                    Re-render
                </button>
            </div>
            <div>
                <button
                    className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md mt-4"
                    onClick={stopTimer}
                >
                    Stop timer
                </button>
            </div>
        </div>
    );
};


// Debouncing avec userRef
export const UseRefDebounce: FC = () => {
    const [search, setSearch] = useState<string>('');
    const timer = useRef<number>(null!);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        if (timer.current) clearTimeout(timer.current);

        timer.current = window.setTimeout(() => {
            console.log('Fetching data...', value);
        }, 500);
    }

    return (
        <div>
            <h1>UseRefDebounce</h1>
            <div>
                <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md mt-4"
                    placeholder="Search..."
                    value={search}
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
};