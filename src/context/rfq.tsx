import {createContext, useContext} from "solid-js";
import {createStore} from "solid-js/store";

export class Price {
    value: number;
    isValid: boolean;

    constructor(value: number, isValid: boolean = true) {
        this.value = value;
        this.isValid = isValid;
    }
}

export type BidMidAsk = {
    bid: Price;
    mid: Price;
    ask: Price;
}

type RfqStoreType = {
    price: number;
    model: BidMidAsk;
    tweb: BidMidAsk;
    composite: BidMidAsk;
    cp: BidMidAsk;
    spread: number;
    tickSize: number;
}

type RfqStoreDispatch = {
    setPrice: (price: number) => void;
    setSpread: (spread: number) => void;
}


const RfqContext = createContext<RfqStoreType>();
const RfqDispatchContext = createContext<RfqStoreDispatch>();

const rfqInitialData: RfqStoreType = {
    price: 102.52,
    model: {
        bid: new Price(90),
        mid: new Price(91),
        ask: new Price(92),
    },
    tweb: {
        bid: new Price(96),
        mid: new Price(97),
        ask: new Price(98),
    },
    composite: {
        bid: new Price(0, false),
        mid: new Price(0, false),
        ask: new Price(102),
    },
    cp: {
        bid: new Price(88),
        mid: new Price(0, false),
        ask: new Price(0, false),
    },
    spread: 0.5,
    tickSize: 0.001
}

export const RfqProvider = (props: any) => {
    const [rfq, setRfq] = createStore<RfqStoreType>(rfqInitialData);


    const setPrice = (price: number) => {
        console.log("set price", price)
        setRfq("price", price);
        recalculateSpread();
    }
    const setSpread = (spread: number) => {
        setRfq("spread", spread);
        recalculatePrice();
    }
    const recalculatePrice = () => {
        // const newPrice = (rfq.model.mid + rfq.spread /rfq.tickSize)
        // setRfq("price", newPrice);
    }
    const recalculateSpread = () => {
        // const newSpread = (rfq.price - rfq.model.mid) / rfq.tickSize;
        // setRfq("spread", newSpread);
    }

    return (
        <RfqContext.Provider value={rfq}>
            <RfqDispatchContext.Provider value={{setSpread, setPrice}}>
                {props.children}
            </RfqDispatchContext.Provider>
        </RfqContext.Provider>
    )
}

export const useRfq = () => useContext(RfqContext);
export const useRfqDispatch = () => useContext(RfqDispatchContext);
