import {createSignal} from "solid-js";

export type ActionableProps = {
    value: number;
    onClick: (value: number) => void;
}

const Actionable = ({onClick, value}: ActionableProps) => {
    const [contentValue, setContentValue] = createSignal(value)
    return (
        <span class={"px-[2px] cursor-pointer border-dotted border-b-2 border-black"} onClick={() => onClick(contentValue())}>
            <span>{contentValue()}</span>
        </span>
    )
}

export default Actionable;
