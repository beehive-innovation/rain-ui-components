import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        imgToUpload?: any;
        alt?: string;
        img?: string;
        src?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ImagePickerProps = typeof __propDef.props;
export declare type ImagePickerEvents = typeof __propDef.events;
export declare type ImagePickerSlots = typeof __propDef.slots;
export default class ImagePicker extends SvelteComponentTyped<ImagePickerProps, ImagePickerEvents, ImagePickerSlots> {
}
export {};
