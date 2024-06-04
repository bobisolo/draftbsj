import {createEffect, createSignal, Show} from "solid-js";
import {useRfqDispatch} from "../context/rfq";
import {IconCaretLeftFilled, IconCaretRightFilled} from "@tabler/icons-solidjs";


const PriceActionableEditableSpinner = (props) => {
    const value = () => props.value;
    const [initialValue, setInitialValue] = createSignal(value());
    const [currentValue, setCurrentValue] = createSignal(value());
    const [textValue, setTextValue] = createSignal(value().toFixed(3));
    const [editable, setEditable] = createSignal(false);

    const rfqDispatch = useRfqDispatch();

    createEffect(() => {
        setInitialValue(value());
        setCurrentValue(value());
        setTextValue(value().toFixed(3));
    })
    // @ts-ignore
    let input: HTMLInputElement = undefined;
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            console.log("touche entrée");
            setEditable(false);
            rfqDispatch?.setPrice(currentValue())
            setInitialValue(currentValue)
        } else if (e.key == "Escape") {
            console.log("touche escape");
            setEditable(false);
            setCurrentValue(initialValue());
        } else {
            // console.log("autre touche", e)
        }
    }

    const onBlur = () => {
        setEditable(false);
        setCurrentValue(initialValue())
    }

    const handleNext = () => {
        let newValue = currentValue() + 0.001;
        setCurrentValue(newValue);
        setInitialValue(newValue);
        rfqDispatch?.setPrice(Number(newValue.toFixed(3)));
    }
    const handlePrev = () => {
        let newValue = currentValue() - 0.001;
        setCurrentValue(newValue);
        setInitialValue(newValue);
        rfqDispatch?.setPrice(Number(newValue.toFixed(3)));
    }

    createEffect(() => {
        if (editable()) {
            input?.focus()
        }
        setTextValue(currentValue().toFixed(3))
    })

    return (
        <div class={"flex items-center h-7"}>

            <IconCaretLeftFilled class={"cursor-pointer"} size={20} onClick={() => handlePrev()}/>

            <Show
                when={!editable()}
            >
                <span class={"px-[2px] cursor-pointer border-b-2 border-black w-[80px] text-[24px] flex justify-center hover:bg-gray-200"}
                      onClick={() => setEditable(true)}>
                    {textValue()}
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

            <IconCaretRightFilled class={"cursor-pointer"} size={20} onClick={() => handleNext()}/>
        </div>
    )
}

export default PriceActionableEditableSpinner;
