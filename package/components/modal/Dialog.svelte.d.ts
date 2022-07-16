import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        slotClass?: string;
        title?: string;
        visible?: boolean;
        show?: () => void;
        hide?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DialogProps = typeof __propDef.props;
export declare type DialogEvents = typeof __propDef.events;
export declare type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponentTyped<DialogProps, DialogEvents, DialogSlots> {
    get show(): () => void;
    get hide(): () => void;
}
export {};
