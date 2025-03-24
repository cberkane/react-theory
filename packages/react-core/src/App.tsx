import { FC, useState } from 'react';

const App: FC = () => {
    console.log('*** app rendering ***');
    const [, setRerender] = useState<boolean>(false);
    const handleRerender = () => setRerender(prev => !prev);

    return (
        <div>
            <div className='p-4 mb-4 text-center text-2xl border-b-1 border-purple-500 bg-purple-200 text-purple-800'>
                <div className='flex justify-between'>
                    <h1>React Core App</h1>
                    <button
                        className='px-4 py-1 bg-purple-500 hover:bg-purple-700 text-white text-sm rounded-md cursor-pointer'
                        onClick={handleRerender}
                    >
                        Re-render
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
