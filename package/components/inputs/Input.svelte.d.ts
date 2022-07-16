import { SvelteComponentTyped } from "svelte";
import type { ValidationResult } from "../../utils/validation";
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: string;
        disabled?: boolean;
        onChange?: () => void;
        onEnter?: () => void;
        validator?: () => Promise<ValidationResult[]>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type InputProps = typeof __propDef.props;
export declare type InputEvents = typeof __propDef.events;
export declare type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
