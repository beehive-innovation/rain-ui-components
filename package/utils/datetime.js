export function dateToISOStr(unixTimestamp) {
    try {
        return new Date(unixTimestamp).toISOString().split("T")[0];
    }
    catch (err) {
        return "";
    }
}
export function dateFromPickerToSeconds(date) {
    try {
        return new Date(date).getTime() / 1000;
    }
    catch (err) {
        return 0;
    }
}
