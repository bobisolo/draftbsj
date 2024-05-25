import {createSignal, Show} from "solid-js";
import {ActionableProps} from "./actionable";


const ActionableEditable = ({onClick, value}: ActionableProps) => {
    const [previousContent, setPreviousContent] = createSignal(value)
    const [contentValue, setContentValue] = createSignal(value)
    const [editable, setEditable] = createSignal(false);

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key == "Enter") {
            console.log("touche entrée");
            setEditable(false);
            onClick(contentValue());
            setPreviousContent(contentValue())
        } else if(e.key == "Escape") {
            console.log("touche escape");
            setEditable(false);
            setContentValue(previousContent());
        }
        else {
            // console.log("autre touche", e)
        }
    }

    return (
        <>
            <Show
                when={!editable()}
            >
                <span class={"px-2 cursor-pointer"} onClick={() => setEditable(true)}>
               <span class={"border-b-2 border-black py-1 "}>{contentValue()}</span>
            </span>
            </Show>
            <Show
                when={editable()}
            >
                <input
                    onKeyDown={handleKeyDown}
                       class={"border border-black w-20 text-center focus:border-none "}
                       autofocus
                       onInput={(e) => setContentValue(Number(e.currentTarget.value))}
                       value={contentValue()}
                />
            </Show>

        </>


    )
}

export default ActionableEditable;
