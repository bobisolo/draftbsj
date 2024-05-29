import {useRfqDispatch} from "../context/rfq";
import {Show} from "solid-js";
import {IconAlertTriangle} from "@tabler/icons-solidjs";


const IndicatorValue = (props: any) => {
    return (
        <div class={"w-20 flex items-center flex-col border-r border-l mx-[2px] hover:bg-gray-200"}>
            <span class={" text-sm font-semibold"}>{props.label}</span>
            <span
                class={"px-[2px]border-dotted border-b-2 border-black w-16 h-7 items-center flex justify-center "}>
            <Show when={props.value.isValid}>
                <span>{props.value.value.toFixed(3)}</span>
            </Show>
              <Show when={!props.value.isValid}>
                  <span class={"px-1"}><IconAlertTriangle size={16}/> </span>
                <span>{props.value.value}</span>
            </Show>
        </span>
        </div>
    );
}
export default IndicatorValue;
