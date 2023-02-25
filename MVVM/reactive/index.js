import { isObject } from '../shared'
import { mutableHandler } from './mutableHandler'


export function useReactive(target) {
    return createReactiveObj(target, mutableHandler)
}

function createReactiveObj(target, baseHandler) {
    if (!isObject(target)) {
        return target
    }

    const observer = new Proxy(target, baseHandler)
    return observer

}