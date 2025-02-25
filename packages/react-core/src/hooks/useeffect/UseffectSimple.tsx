import { FC, useEffect } from "react";

const UseEffectSimple: FC = () => {
    console.log('UseEffectSimple render...');

    useEffect(() => {
        console.log('useEffect execution...');

        return () => {
            console.log('useEffect cleanup...');
        };
    }, []);

    return (
        <div>
            <h1>UseEffectSimple</h1>
        </div>
    );
};

export default UseEffectSimple;