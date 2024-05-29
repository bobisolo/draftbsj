import {createEffect, createSignal, Show} from "solid-js";
import {useRfqDispatch} from "../context/rfq";
import {IconCaretLeftFilled, IconCaretRightFilled} from "@tabler/icons-solidjs";


const SpreadActionableSpinner = (props: any) => {
    const value = () => props.value;
    const [initialValue, setInitialValue] = createSignal(value());
    const [currentValue, setCurrentValue] = createSignal(Number(value().toFixed(3)));
    const [textValue, setTextValue] = createSignal(value().toFixed(3));
    const [editable, setEditable] = createSignal(false);

    const rfqDispatch = useRfqDispatch();

    createEffect(() => {
        setInitialValue(value());
        setCurrentValue(value());
        setTextValue(value().toFixed(3));
    });
    // @ts-ignore
    let input: HTMLInputElement = undefined;
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            console.log("touche entrée");
            setEditable(false);
            rfqDispatch?.setSpread(currentValue())
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
        rfqDispatch?.setSpread(Number(newValue.toFixed(3)));
    }
    const handlePrev = () => {
        let newValue = currentValue() - 0.001;
        setCurrentValue(newValue);
        setInitialValue(newValue);
        rfqDispatch?.setSpread(Number(newValue.toFixed(3)));
    }

    createEffect(() => {
        if (editable()) {
            input?.focus()
        }
        setTextValue(currentValue().toFixed(3))
    })

    return (
        <div class={"w-[4.3rem] items-center justify-center text-center mx-1"}>
            <span class={"text-xs font-semibold mb-1"}>{props.label}</span>
            <div class={"flex items-center h-7 w-[4.5rem]"}>
                <IconCaretLeftFilled class={"cursor-pointer"} size={18} onClick={() => handlePrev()}/>
                <Show
                    when={!editable()}
                >
                <span
                    class={"px-[1px] cursor-pointer border-b-2 border-black w-[3rem] flex justify-center hover:bg-gray-200 text-sm"}
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
                           class={"border border-black w-16 text-center focus:border-none text-sm h-6"}
                           onInput={(e) => setCurrentValue(Number(e.currentTarget.value))}
                           value={currentValue()}
                    />
                </Show>

                <IconCaretRightFilled class={"cursor-pointer"} size={18} onClick={() => handleNext()}/>
            </div>
        </div>
    )
}
export default SpreadActionableSpinner;
