import { get, writable } from "svelte/store";
export var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["INFO"] = 0] = "INFO";
    NotificationType[NotificationType["SUCCESS"] = 1] = "SUCCESS";
    NotificationType[NotificationType["ERROR"] = 2] = "ERROR";
    NotificationType[NotificationType["NONE"] = 3] = "NONE";
})(NotificationType || (NotificationType = {}));
export function defaultNotification() {
    return {
        text: "",
        type: NotificationType.NONE
    };
}
let timeout;
const NOTIFICATION_DEFAULT_TIMEOUT = 5000;
export const notification = writable(defaultNotification());
export function info(text) {
    return notify({
        text,
        type: NotificationType.INFO
    });
}
export function error(text) {
    return notify({
        text,
        type: NotificationType.ERROR
    });
}
export function success(text) {
    return notify({
        text,
        type: NotificationType.SUCCESS
    });
}
export function notify(notification_, notifyTimeout = NOTIFICATION_DEFAULT_TIMEOUT) {
    try {
        notification_.text = (notification_.text ?? "").trim();
        if (notification_.text.length > 0) {
            clearInterval(timeout);
            timeout = setInterval(removeNotification, notifyTimeout);
            notification.set(notification_);
            return true;
        }
    }
    catch (err) {
        console.error(`❌ Smth went wrong sending a notification (${JSON.stringify(notification_)}): ${err}`);
    }
    return removeNotification() && false;
}
export function notificationClasses() {
    switch (get(notification).type) {
        case NotificationType.INFO:
        case NotificationType.SUCCESS:
            return "text-white bg-green";
        case NotificationType.ERROR:
            return "text-white bg-red";
        case NotificationType.NONE:
        default:
            return "";
    }
}
export function removeNotification() {
    notification.set(defaultNotification());
    return true;
}
export function isDefaultNotification(notification_ = get(notification)) {
    return JSON.stringify(notification_) == JSON.stringify(defaultNotification());
}
