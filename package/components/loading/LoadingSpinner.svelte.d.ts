import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        text?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type LoadingSpinnerProps = typeof __propDef.props;
export declare type LoadingSpinnerEvents = typeof __propDef.events;
export declare type LoadingSpinnerSlots = typeof __propDef.slots;
export default class LoadingSpinner extends SvelteComponentTyped<LoadingSpinnerProps, LoadingSpinnerEvents, LoadingSpinnerSlots> {
}
export {};
