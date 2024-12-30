import React from "react";
import { useLoaderData } from "react-router-dom";

const Foo: React.FC = () => {
    const todos = useLoaderData();

    return (
        <div>
            <p>Todos</p>
            {JSON.stringify(todos)}
        </div>
    );
}

export default Foo;