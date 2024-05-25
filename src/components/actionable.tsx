import {createSignal} from "solid-js";

export type ActionableProps = {
    value: number;
    onClick: (value: number) => void;
}

const Actionable = ({onClick, value}: ActionableProps) => {
    const [contentValue, setContentValue] = createSignal(value)
    return (
        <span class={"px-2 cursor-pointer"} onClick={() => onClick(contentValue())}>
            <span class={"border-dashed border-b-2 border-black py-1 "}>{contentValue()}</span>
        </span>
    )
}

export default Actionable;
