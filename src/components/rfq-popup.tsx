import {useRfq,} from "../context/rfq";
import PriceActionableEditableSpinner from "./price-actionable-editable-spinner";
import {BidMidAskPanelWithLabel} from "./bid-mid-ask-panel";
import ActionableProba, {ActionableProbaList} from "./actionable-proba";

type RfqType = {
    id: string;
    price: number;
}

function RfqPopup() {
    const rfq = useRfq();

    return (
        <div class={"h-screen max-w-7xl border border-spacing-1 mx-auto"}>
            <div class={"my-5 h-32 bg-red-600"}>
                <p>
                    RfqPrice: {rfq?.price}
                </p>
            </div>

            <div class={"flex space-x-4"}>
                <div class={" w-[25rem]"}> {/* Bloc pricing */}
                    <div class={"px-4 border mx-2"}>
                        <div class={"flex my-3"}>
                            <span>Pricing</span>
                            {/*<div>*/}
                            {/*    Apply drop*/}
                            {/*</div>*/}
                        </div>
                        <div class={"flex items-center"}>
                            <span class={"w-14 text-xs"}>Price</span>
                            <PriceActionableEditableSpinner value={rfq?.price!}/>
                        </div>

                        <BidMidAskPanelWithLabel bma={rfq?.model!} label={"Model"}/>
                        <BidMidAskPanelWithLabel bma={rfq?.tweb!} label={"Tweb"}/>
                        <BidMidAskPanelWithLabel bma={rfq?.composite!} label={"Composite"}/>
                        <BidMidAskPanelWithLabel bma={rfq?.cp!} label={"CP+"}/>
                    </div>
                    <div class={"px-4 mx-2 mt-2 border py-2"}>
                        <div class={"pb-2"}>AMM</div>
                        <ActionableProbaList />
                    </div>
                </div>
                <div class={" border w-44 flex mx-auto items-center text-center  justify-center"}>
                    <div class={""}>
                        <button class={"bg-gray-300 px-2 w-32 py-1 rounded my-1"}>Send</button>
                        <button class={"bg-gray-400 px-2 w-32 py-1 rounded my-1"}>Send Auto</button>
                        <button class={"bg-gray-300 px-2 w-32 py-1 rounded my-1"}>Stop Auto</button>
                        <button class={"bg-gray-500 px-2 w-32 py-1 rounded my-1"}>Reject</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RfqPopup;
