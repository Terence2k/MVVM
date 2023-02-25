import { useReactive } from '.'
import { update } from '../render';
import { statePool } from '../compiler/state';
import { isObject, hasOwnproperty, isEqual } from '../shared'

const get = createGetter(),
    set = createSetter();


function createGetter() {
    return function get(target, key, receiver) {
        const res = Reflect.get(target, key, receiver)
        console.log('响应式获取：', target[key])
        if (isObject(res)) {
            return useReactive(res)
        }
        return res
    }
}
function createSetter() {
    return function set(target, key, value, receiver) {
        const isKeyExit = hasOwnproperty(target, key),
            oldKey = target[key],
            res = Reflect.set(target, key, value, receiver)

        if (!isKeyExit) {
            console.log('响应新增：', key, value)
        } else if (!isEqual(value, oldKey)) {


            update(statePool, key, value)
            console.log('响应式修改：', key, value)
        }
        return res
    }
}

const mutableHandler = {
    get,
    set
}

export {
    mutableHandler
}