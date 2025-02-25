import { FC, useMemo } from "react";

const getObj = () => ({ num: 5 });

/*
* useMemo: lorsque la dépendance change, même par référence, 'computeExensiveValue' recalculée
*/
const MemoRef: FC = () => {
    console.log('MemoRef render...');

    const computeExensiveValue = (obj: { num: number }) => {
        console.log('Computing Memoref value...');
        return 3.14 * obj.num;
    }

    const computeExensiveValue2 = (obj: { num: number }) => {
        console.log('Computing Memoref value2...');
        return 3.14 * obj.num;
    }

    // useMemo avec un objet mémorisé
    const obj = useMemo(() => ({ num: 5 }), []);
    const value = useMemo(() => computeExensiveValue(obj), [obj]);

    // useMemo avec un même objet qui change de réference
    const obj2 = getObj();
    const value2 = useMemo(() => computeExensiveValue2(obj2), [obj2]);

    return (
        <div>
            <div>
                <h1>MemoRef</h1>
                <p>Check the console for logs</p>
                <p>{value}</p>
            </div>
            <div>
                <h1>MemoRef</h1>
                <p>Check the console for logs</p>
                <p>{value2}</p>
            </div>
        </div>
    );
};

export default MemoRef;