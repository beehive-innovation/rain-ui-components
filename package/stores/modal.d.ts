export declare const DEFAULT_MSG = "Loading...";
export declare const modal: import("svelte/store").Writable<{
    closeable: boolean;
    message: string;
    showing: boolean;
}>;
export declare function showModal(message?: string, closeable?: boolean): void;
export declare function hideModal(): void;
