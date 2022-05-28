import { writable } from "svelte/store"

export const DEFAULT_MSG = "Loading..."

export const modal = writable({
  closeable: false,
  message: DEFAULT_MSG,
  showing: false
})

export function showModal(message: string = DEFAULT_MSG, closeable = false) {
  modal.set({
    closeable,
    message,
    showing: true
  })
  document.body.style.overflow = "hidden"
}

export function hideModal() {
  modal.set({
    closeable: false,
    showing: false,
    message: DEFAULT_MSG
  })
  document.body.style.overflow = "auto"
}
