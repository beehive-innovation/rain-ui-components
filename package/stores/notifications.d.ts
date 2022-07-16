export declare enum NotificationType {
    INFO = 0,
    SUCCESS = 1,
    ERROR = 2,
    NONE = 3
}
export interface Notification {
    text: string;
    type: NotificationType;
}
export declare function defaultNotification(): Notification;
export declare const notification: import("svelte/store").Writable<Notification>;
export declare function info(text: string): boolean;
export declare function error(text: string): boolean;
export declare function success(text: string): boolean;
export declare function notify(notification_: Notification, notifyTimeout?: number): boolean;
export declare function notificationClasses(): string;
export declare function removeNotification(): boolean;
export declare function isDefaultNotification(notification_?: Notification): boolean;
