import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        src?: string;
        video?: string;
        animationToUpload?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type VideoPickerProps = typeof __propDef.props;
export declare type VideoPickerEvents = typeof __propDef.events;
export declare type VideoPickerSlots = typeof __propDef.slots;
export default class VideoPicker extends SvelteComponentTyped<VideoPickerProps, VideoPickerEvents, VideoPickerSlots> {
}
export {};
