import {Price, useRfqDispatch} from "../context/rfq";
import {IconAlertTriangle} from '@tabler/icons-solidjs';
import {Show} from "solid-js";


const PriceActionable = ({price}: { price: Price }) => {
    const rfqDispatch = useRfqDispatch();

    return (
        <span
            class={"px-[2px] cursor-pointer border-dotted border-b-2 border-black w-16 h-7 items-center flex justify-center hover:bg-gray-200"}>
            <Show when={price.isValid}>
                <span onClick={() => {
                    console.log("set price price actionable", price.value);
                    rfqDispatch?.setPrice(price.value)
                }}>{price.value.toFixed(3)}</span>
            </Show>
              <Show when={!price.isValid}>
                  <span class={"px-1"}><IconAlertTriangle size={16}/> </span>
                <span>{price.value}</span>
            </Show>
        </span>
    )
}

export default PriceActionable;
