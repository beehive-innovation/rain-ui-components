export function deepCopy(something: any): any {
  return JSON.parse(JSON.stringify(something))
}

export function formatAddress(address = "") {
  return address.slice(0, 6) + "..." + address.slice(address.length - 4, address.length)
}
