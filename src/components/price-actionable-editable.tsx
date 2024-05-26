import {createEffect, createSignal, Show} from "solid-js";
import {ActionableProps} from "./actionable";
import {useRfqDispatch} from "../context/rfq";


const PriceActionableEditable = ({value}: {value: number}) => {
    const [initialValue, setInitialValue] = createSignal(value);
    const [currentValue, setCurrentValue] = createSignal(value);
    const [textValue, setTextValue] = createSignal(value.toFixed(3));
    const [editable, setEditable] = createSignal(false);

    const rfqDispatch = useRfqDispatch();

    // @ts-ignore
    let input: HTMLInputElement = undefined;
    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key == "Enter") {
            console.log("touche entrée");
            setEditable(false);
            rfqDispatch?.setPrice(currentValue())
            setInitialValue(currentValue)
        } else if(e.key == "Escape") {
            console.log("touche escape");
            setEditable(false);
            setCurrentValue(initialValue());
        }
        else {
            // console.log("autre touche", e)
        }
    }

    const onBlur = () => {
        setEditable(false);
        setCurrentValue(initialValue())
    }

    createEffect(() => {
        if(editable()) {
            input?.focus()
        }
        setTextValue(currentValue().toFixed(3))
    })

    return (
        <>
            <Show
                when={!editable()}
            >
                 <span class={"px-[2px] cursor-pointer border-b-2 border-black w-16 flex justify-center hover:bg-gray-200"}
                       onClick={() => setEditable(true)}>
                    {currentValue()}
                </span>
            </Show>
            <Show
                when={editable()}
            >
                {/* adding ref */}
                <input ref={input} onBlur={(e) => onBlur()}
                       onKeyDown={handleKeyDown}
                       class={"border border-black w-20 text-center focus:border-none "}
                       autofocus
                       onInput={(e) => setCurrentValue(Number(e.currentTarget.value))}
                       value={currentValue()}
                />
            </Show>

        </>


    )
}

export default PriceActionableEditable;
