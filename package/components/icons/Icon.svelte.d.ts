import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        width?: number;
        height?: null | number;
        icon: "arrow-left" | "arrow-right" | "arrow-circle-up" | "arrow-circle-down" | "cancel" | "check" | "cube" | "cube2" | "cloud-upload" | "controller" | "filter" | "home" | "info" | "none" | "refresh" | "settings" | "sun" | "shield" | "terminal" | "user" | "pencil" | "plus" | "trash";
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IconProps = typeof __propDef.props;
export declare type IconEvents = typeof __propDef.events;
export declare type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponentTyped<IconProps, IconEvents, IconSlots> {
}
export {};
