import {ActionableProps} from "./actionable";
import ActionableEditable from "./actionable-editable";
import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-solidjs';
import {createSignal, Show} from "solid-js";


const ActionableEditSpinner = ({onClick, value}: ActionableProps) => {
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

    const handleNext = () => {
        let newValue = contentValue() + 0.001;
        setContentValue(newValue);
        onClick(newValue);
    }
    const handlePrev = () => {
        let newValue = contentValue() - 0.001;
        setContentValue(newValue);
        onClick(newValue);
    }

    console.log("content value", contentValue());
    return (
        <div class={"flex items-center h-7"}>
            <IconCaretLeftFilled  class={"cursor-pointer"} size={20} onClick={() => handlePrev()} />

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


            <IconCaretRightFilled class={"cursor-pointer"} size={20}  onClick={() => handleNext()} />
        </div>
    )
}

export default ActionableEditSpinner;
