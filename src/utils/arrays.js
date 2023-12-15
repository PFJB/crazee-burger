export function deepCopyArray(array) { return JSON.parse(JSON.stringify(array)) }
export function isEmpty(array) { return array.length === 0 }