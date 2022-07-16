import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        alt?: string;
        altSources?: string[];
        src?: string;
        imageClass?: string;
        loadingClass?: string;
        pressable?: boolean;
    };
    events: {
        click: CustomEvent<any>;
        error: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ImageProps = typeof __propDef.props;
export declare type ImageEvents = typeof __propDef.events;
export declare type ImageSlots = typeof __propDef.slots;
export default class Image extends SvelteComponentTyped<ImageProps, ImageEvents, ImageSlots> {
}
export {};
