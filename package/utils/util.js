export function deepCopy(something) {
    return JSON.parse(JSON.stringify(something));
}
export function formatAddress(address = "") {
    return address.slice(0, 6) + "..." + address.slice(address.length - 4, address.length);
}
export function isEnter(evt = { charCode: 0 }) {
    const enter = 13;
    return (evt?.charCode ?? 0) == enter;
}
export function isSubmit(evt = { type: "none" }) {
    return (evt?.type ?? "none") == "submit";
}
