import { FC, useMemo } from "react";

interface MemoPageProps {
    num: number;
}

const MemoPage: FC<MemoPageProps> = ({ num }) => {
    console.log('MemoPage render...');

    // expensive computation
    const computeExensiveValue = (num: number) => {
        console.log('Computing expensive value...');
        return 3.14 * num;
    }

    // memoize the expensive value
    const memoizedValue = useMemo(() => computeExensiveValue(num), [num]);

    return (
        <div>
            <h1>MemoPage</h1>
            <p>Expensive value is {memoizedValue}</p>
        </div>
    );
}

export default MemoPage;