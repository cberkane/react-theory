import { FC, memo } from "react";

interface CallbackChildProps {
    onClick: () => void;
}

/*
* Si la props 'onClick' change, le composant sera re-rendu malgré le memo !
* Or pour mémoriser la fonction 'onClick', on utilise useCallback dans le parent !
*/
const CallbackChild: FC<CallbackChildProps> = memo(({ onClick }) => {
    console.log('CallbackChild render...');

    return (
        <div>
            <h1>CallbackChild</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    );
});

export default CallbackChild;