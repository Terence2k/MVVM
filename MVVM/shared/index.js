export function isObject(value) {
    return typeof value === 'object' && value !== null
}

export function hasOwnproperty(target, key) {
    return Object.prototype.hasOwnProperty.call(target, key)
}

export function isEqual(newValue, oldvalue) {
    return newValue === oldvalue
}

export function randomNum() {
    return new Date().getTime() + parseInt(Math.random() * 10000)
}

export function checkType(str){
    // if()
}