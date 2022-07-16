/** @typedef {typeof __propDef.props}  UnderConstructionProps */
/** @typedef {typeof __propDef.events}  UnderConstructionEvents */
/** @typedef {typeof __propDef.slots}  UnderConstructionSlots */
export default class UnderConstruction extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type UnderConstructionProps = typeof __propDef.props;
export type UnderConstructionEvents = typeof __propDef.events;
export type UnderConstructionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
