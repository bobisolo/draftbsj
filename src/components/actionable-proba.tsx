import PriceActionable from "./price-actionable";
import {Price, useRfqDispatch} from "../context/rfq";
import {Index, Show} from "solid-js";
import {IconAlertTriangle} from "@tabler/icons-solidjs";


const ActionableProba = ({proba}: {proba: Proba}) => {
    const rfqDispatch = useRfqDispatch();
    return (
        <div class={"w-20 flex items-center flex-col border-r border-l mx-[2px] hover:bg-gray-200 cursor-pointer "} onClick={() => {
            console.log("set price price actionable", proba.price.value);
            rfqDispatch?.setPrice(proba.price.value)
        }}>
            <span class={" text-sm font-semibold"}>{proba.value}%</span>
            <span
                class={"px-[2px]border-dotted border-b-2 border-black w-16 h-7 items-center flex justify-center "}>
            <Show when={proba.price.isValid}>
                <span>{proba.price.value.toFixed(3)}</span>
            </Show>
              <Show when={!proba.price.isValid}>
                  <span class={"px-1"}><IconAlertTriangle size={16}/> </span>
                <span>{proba.price.value}</span>
            </Show>
        </span>
        </div>
    );
}

type Proba = {
    price: Price;
    value: number;
}

export const ActionableProbaList = () => {
    const list: Proba[] = [
        {value: 10, price: new Price(85.453, true)},
        {value: 30, price: new Price(84.625, true)},
        {value: 50, price: new Price(86.778, true)},
        {value: 70, price: new Price(87.921, true)},
        {value: 90, price: new Price(88.223, true)},
    ]
    return (
        <div class={"flex"}>
            <Index each={list}>
                {(item, index) => (
                    <ActionableProba proba={item()}/>
                )}
            </Index>
        </div>
    )
}

export default ActionableProba;
