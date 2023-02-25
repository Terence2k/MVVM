import { randomNum } from '../shared'


const reg_value = /\{\{(.*?)\}\}/g
const reg_tag = /\<(.+?)\>/
const reg_html = /\<.+?\>\{\{(.*?)\}\}\<\/.+?\>/g
/**
 * mark : randomNum
 * state : value
 */
export const statePool = []
let o = 0
export function stateFormat(template, state) {

    let _state = {}

    template = template.replace(reg_html, function (node, key) {

        const match = node.match(reg_tag)[1]
        const _mark = randomNum()
        _state.mark = _mark

        statePool.push(_state)
        _state = {}

        return `<${match} data-mark="${_mark}"> {{${key}}} </${match}>`
    })


    template = template.replace(reg_value, function (node, key) {

        // console.log(node, key, 'tag')
        let _var = key.trim()
        const _varArr = _var.split('.')

        for (let i = 0; i < _varArr.length; i++) {
            _var = state[_varArr[i]]
            console.log(_var, '_var', _varArr, i)
        }

        // while(i < )

        // return 123
        _state.state = _varArr
        statePool[o].state = _varArr
        o++
        console.log(statePool, 'statePool')

        return _var
    })

    return template
}