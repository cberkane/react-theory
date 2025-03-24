import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

type ForwardedProps = {
    label: string;
};

// Exposing the DOM node to the parent component
export const Forwarded = forwardRef(
    ({ label }: ForwardedProps, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <div className="max-w-64 flex flex-col p-4">
                <label htmlFor={label}>{label}</label>
                <input
                    className="border border-gray-400 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    type="text"
                    id={label}
                    placeholder="enter value"
                    ref={ref}
                />
            </div>
        );
    }
);

type ImperativeProps = {
    focus: () => void;
    blur: () => void;
};

// Exposing an imperative handle instead of the DOM node to the parent component
export const ForwaredImperative = forwardRef(
    (props: ForwardedProps, ref: ForwardedRef<ImperativeProps>) => {
        const inputRef = useRef<HTMLInputElement>(null!);

        useImperativeHandle(ref, () => ({
            focus: () => {
                console.log('focus');
                inputRef.current.focus();
            },
            blur: () => {
                console.log('blur');
                inputRef.current.blur();
            }
        }));

        return (
            <div className="max-w-64 flex flex-col p-4">
                <label htmlFor={props.label}>{props.label}</label>
                <input
                    className="border border-gray-400 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    type="text"
                    id={props.label}
                    placeholder="enter value"
                    ref={inputRef}
                />
            </div>
        );
    }
);