import { FC, useState } from "react";

const UseStateHook: FC = () => {
    const [count, setCount] = useState(0);
    const doubleCount = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="max-w-lg border border-gray-300 p-4 rounded-md mx-auto mt-4">
            <h1 className="text-2xl text-center">useState Hook</h1>
            <div className="text-2xl text-center mt-4">
                {count}
            </div>
            <div className="flex col-span-2 justify-center mt-4">
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-blue-700 hover:bg-blue-800 text-white font-sm py-2 px-4 rounded cursor-pointer"
                >
                    Increment
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="bg-red-700 hover:bg-red-800 text-white font-sm py-2 px-4 rounded ml-4 cursor-pointer"
                >
                    Decrement
                </button>
                <button
                    onClick={doubleCount}
                    className="bg-green-700 hover:bg-green-800 text-white font-sm py-2 px-4 rounded ml-4 cursor-pointer"
                >
                    Double Increment
                </button>
            </div>
        </div >
    );
}

export default UseStateHook;