export function dateToISOStr(unixTimestamp: number): string {
  try {
    return new Date(unixTimestamp).toISOString().split("T")[0]
  } catch (err) {
    return ""
  }
}

export function dateFromPickerToSeconds(date): number {
  try {
    return new Date(date).getTime() / 1000
  } catch (err) {
    return 0
  }
}
