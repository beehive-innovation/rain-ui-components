import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        src?: string;
        pressable?: boolean;
    };
    events: {
        click: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type VideoProps = typeof __propDef.props;
export declare type VideoEvents = typeof __propDef.events;
export declare type VideoSlots = typeof __propDef.slots;
export default class Video extends SvelteComponentTyped<VideoProps, VideoEvents, VideoSlots> {
}
export {};
