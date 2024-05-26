import PriceActionable from "./price-actionable";
import {Price} from "../context/rfq";
import {Index} from "solid-js";


const ActionableProba = ({proba}: {proba: Proba}) => {
    return (
        <div class={"w-20 flex items-center flex-col border-r border-l mx-[2px]"}>
            <span class={" text-sm font-semibold"}>{proba.value}%</span>
            <PriceActionable price={proba.price} />
        </div>
    )
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
                    <ActionableProba proba={item()} />
                )}
            </Index>
        </div>
    )
}

export default ActionableProba;
