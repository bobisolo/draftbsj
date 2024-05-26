import {BidMidAsk} from "../context/rfq";
import PriceActionable from "./price-actionable";


const BidMidAskPanel = ({bma}: {bma: BidMidAsk}) => {

    return (
        <div class={"flex space-x-1 items-center"}>
            <PriceActionable price={bma.bid}/>
            <span>/</span>
            <PriceActionable price={bma.mid}/>
            <span>/</span>
            <PriceActionable price={bma.ask}/>
        </div>
    )
}

export const BidMidAskPanelWithLabel = ({bma, label}: {bma: BidMidAsk, label: string}) => {
    return (
        <div class={"flex my-1 h-7 items-center"}>
            <div class={"w-16"}>
                <span class={"text-xs font-semibold"}>{label}</span>
            </div>
            <BidMidAskPanel bma={bma} />
        </div>
    )
}

export default BidMidAskPanel;

