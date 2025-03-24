import { FC, memo, useCallback, useEffect, useState } from "react";


// usage de useCallback pour éviter de re-créer la fonction à chaque re-render
export const UseCallbackHook: FC = () => {
    console.log('UseCallbackHook rendering...');
    const [, setReRender] = useState<boolean>(false);

    const handleAction = useCallback(() => {
        console.log('Action triggered...');
    }, []);

    return (
        <div className="max-w-lg border border-gray-300 p-4 rounded-md mx-auto mt-4">
            <h1 className="text-2xl text-center">useCallback Hook</h1>
            <div>
                <button
                    className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md mt-4"
                    onClick={() => setReRender(prev => !prev)}
                >
                    Re-render papa
                </button>
            </div>
            <div>
                <CallbackChild onAction={handleAction} />
            </div>
        </div>
    );
};


type CallbackChildProps = {
    onAction: () => void;
}
const CallbackChild: FC<CallbackChildProps> = memo(({ onAction }) => {
    console.log('CallbackChild rendering...');
    return (
        <div>
            <h2 className="text-center text-lg mt-4 mb-1">Child</h2>
            <div>
                <button
                    onClick={onAction}
                    className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md mt-4">
                    Trigger action
                </button>
            </div>
        </div>
    );
});


// usage avec un useEffect
export const UseCallbackWithEffect: FC = () => {
    console.log('UseCallbackEffect rendering...');
    const [, setData] = useState<{ name: string }>(null!);

    const fetchData = useCallback(() => {
        console.log('Fetching data...');
        setData({ name: 'John' });
    }, []);

    useEffect(() => {
        console.log('Effect triggered...');
    }, [fetchData]);

    return (
        <div className="max-w-lg border border-gray-300 p-4 rounded-md mx-auto mt-4">
            <h1 className="text-2xl text-center">useCallback Hook</h1>
            <div>
                <button
                    className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md mt-4"
                    onClick={fetchData}
                >
                    Fetch data
                </button>
            </div>
        </div>
    );
};