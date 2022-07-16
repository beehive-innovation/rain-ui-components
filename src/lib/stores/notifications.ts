import { get, writable } from "svelte/store"

export enum NotificationType {
  INFO,
  SUCCESS,
  ERROR,
  NONE
}

export interface Notification {
  text: string
  type: NotificationType
}

export function defaultNotification(): Notification {
  return {
    text: "",
    type: NotificationType.NONE
  }
}

let timeout
const NOTIFICATION_DEFAULT_TIMEOUT = 5000
export const notification = writable(defaultNotification())

export function info(text: string): boolean {
  return notify({
    text,
    type: NotificationType.INFO
  })
}

export function error(text: string): boolean {
  return notify({
    text,
    type: NotificationType.ERROR
  })
}

export function success(text: string): boolean {
  return notify({
    text,
    type: NotificationType.SUCCESS
  })
}

export function notify(
  notification_: Notification,
  notifyTimeout: number = NOTIFICATION_DEFAULT_TIMEOUT
): boolean {
  try {
    notification_.text = (notification_.text ?? "").trim()
    if (notification_.text.length > 0) {
      clearInterval(timeout)
      timeout = setInterval(removeNotification, notifyTimeout)
      notification.set(notification_)
      return true
    }
  } catch (err) {
    console.error(`❌ Smth went wrong sending a notification (${JSON.stringify(notification_)}): ${err}`)
  }
  return removeNotification() && false
}

export function notificationClasses(): string {
  switch (get(notification).type) {
    case NotificationType.INFO:
    case NotificationType.SUCCESS:
      return "text-white bg-green"
    case NotificationType.ERROR:
      return "text-white bg-red"
    case NotificationType.NONE:
    default:
      return ""
  }
}

export function removeNotification(): boolean {
  notification.set(defaultNotification())
  return true
}

export function isDefaultNotification(notification_: Notification = get(notification)): boolean {
  return JSON.stringify(notification_) == JSON.stringify(defaultNotification())
}
