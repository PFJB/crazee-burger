export function deepCopyArray(array) { return JSON.parse(JSON.stringify(array)) }

export function isEmpty(array) { return array.length === 0 }

export const findObjectById = (id, array) => {
    return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndexById = (idWithUnknowwIndex, array) => {
    return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowwIndex)
}

export function convertStringToBoolean(input) {
    if (typeof input === "boolean") return input
    return input === "true"
}