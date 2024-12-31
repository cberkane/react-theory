import { useState } from "react";
import Todo from "./Todo";
import Api from "./Api";

function App() {

    const [route, setRoute] = useState('todos')

    return (
        <div>
            <nav>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => setRoute('todos')}>Todos</button>
                    <button onClick={() => setRoute('api')}>Todos + API</button>
                </div>
            </nav>
            {route === 'todos' && <Todo />}
            {route === 'api' && <Api />}
        </div>
    );
}

export default App;
