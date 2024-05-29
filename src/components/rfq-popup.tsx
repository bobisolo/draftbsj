import {Price, useRfq,} from "../context/rfq";
import PriceActionableEditableSpinner from "./price-actionable-editable-spinner";
import {BidMidAskPanelWithLabel} from "./bid-mid-ask-panel";
import ActionableProba, {ActionableProbaList} from "./actionable-proba";
import PriceActionableEditable from "./price-actionable-editable";
import SpreadActionableSpinner from "./spread-actionable-spinner";
import IndicatorValue from "./indicator-value";

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
                <div class={" w-[30rem]"}> {/* Bloc pricing */}
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
                    <div class={"mx-2 mt-2 border py-2 flex"}>
                        <SpreadActionableSpinner label={"Yield"} value={0.4674} />
                        <SpreadActionableSpinner label={"ASWprd"} value={49.3} />
                        <SpreadActionableSpinner label={"TEDSpread"} value={0.0} />
                        <SpreadActionableSpinner label={"BMKSprd"} value={220.30} />
                        <SpreadActionableSpinner label={"ZSpread"} value={46.738} />
                        <SpreadActionableSpinner label={"ISpread"} value={242.300} />
                    </div>
                    <div class={"px-4 mx-2 mt-2 border py-2"}>
                        <div class={"pb-2  px-1 text-sm text-left font-semibold"}>AMM</div>
                        <ActionableProbaList />
                    </div>
                    {/*<div class={"flex flex-wrap"}>*/}
                    {/*    <IndicatorValue label={"Closing Bid"} value={new Price(100)} />*/}
                    {/*    <IndicatorValue label={"Closing Ask"} value={new Price(100)} />*/}
                    {/*    <IndicatorValue label={"Closing Bid"} value={new Price(100)} />*/}
                    {/*    <IndicatorValue label={"Closing Bid"} value={new Price(100)} />*/}
                    {/*    <IndicatorValue label={"Closing Bid"} value={new Price(100)} />*/}
                    {/*</div>*/}
                </div>
                <div class={" border w-44 flex mx-auto items-center text-center justify-between flex-col"}>
                    <div class={"my-5"}>
                        <button class={"bg-gray-300 px-2 w-32 py-1 rounded my-1"}>Send</button>
                        <button class={"bg-gray-400 px-2 w-32 py-1 rounded my-1"}>Send Auto</button>
                        <button class={"bg-gray-300 px-2 w-32 py-1 rounded my-1"}>Stop Auto</button>
                        <button class={"bg-gray-500 px-2 w-32 py-1 rounded my-1"}>Reject</button>
                    </div>
                    <div class={"flex flex-wrap space-x-1 justify-center my-5"}>
                        <button class={"bg-gray-300 hover:bg-gray-500 px-2 text-xs  py-1 rounded my-1"}>BBG CHAT SALES</button>
                        <button class={"bg-gray-300 hover:bg-gray-500 px-2 text-xs py-1 rounded my-1"}>DES L1</button>
                        <button class={"bg-gray-300 hover:bg-gray-500 px-2 text-xs py-1 rounded my-1"}>ALLQ L1</button>
                        <button class={"bg-gray-300 hover:bg-gray-500 px-2 text-xs py-1 rounded my-1"}>YAS L1</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RfqPopup;
