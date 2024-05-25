import {createSignal} from "solid-js";
import Actionable from "./actionable";
import ActionableEditable from "./actionable-editable";

type RfqType = {
    id: string;
    price: number;
}

function RfqPopup() {
    const initialRfq: RfqType = {
        id: "TRADEWEB_EUCORP_129565",
        price: 105.365
    }

    const [rfq, setRfq] = createSignal(initialRfq);

    const updatePrice = (value: number) => {
        const newRfq: RfqType = {...rfq(), price: value};
        setRfq(newRfq);
    }

    return (
        <div class={"h-screen max-w-7xl border border-spacing-1 mx-auto"}>
            <div class={"my-5 h-32 bg-red-600"}>
                <p>
                    RfqPrice: {rfq().price}
                </p>
            </div>

            <p class={"my-2"}>
                Bid: <Actionable value={123.568} onClick={(value)  => {updatePrice(value);}} />
            </p>
            <p class={"my-2"}>
                Mid: <Actionable value={122.659} onClick={(value) => {
                updatePrice(value);
            }}/>
            </p>
            <p class={"my-2"}>
                Ask: <Actionable value={121.856} onClick={(value) => {
                updatePrice(value);
            }}/>

            </p>
            <p class={"my-2"}>
                Price: <ActionableEditable value={121.856} onClick={(value) => {
                updatePrice(value);
            }}/>
            </p>

        </div>
    );
}

export default RfqPopup;
