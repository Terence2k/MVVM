const reg_onClick = /onClick\=\"(.+?)\"/g;
const reg_fgName = /^(.+?)\(/;
const reg_arg = /\((.*?)\)/

import { randomNum } from '../shared'
/**
 * eventPool = []
 * 
 * {
 *   mark : random
 *   hadnler
 *   type
 * 
 * }
 * 
 */

const eventPool = []

export function eventFormat(template) {
    // console.log(template, 'template')
    console.log(template.match(reg_onClick))
    // return template

    return template.replace(reg_onClick, function (node, key) {
        console.log(node, key)
        let _mark = randomNum()

        eventPool.push({
            mark: _mark,
            hadnler: key.trim(),
            type: 'click'
        })

        return `data-mark="${_mark}"`
    })
}

export function bindEvent(methods) {
    const allElements = document.querySelectorAll('*')
    let oItem = null,
        _mark = 0;

    // console.log(allElements)

    eventPool.forEach(event => {
        for (let i = 0; i < allElements.length; i++) {
            oItem = allElements[i]
            _mark = parseInt(oItem.dataset.mark)
            // _mark =
            // console.log(_mark, '_mark')

            if (event.mark === _mark) {
                const fnName = event.hadnler.match(reg_fgName)[1]
                const arg = event.hadnler.match(reg_arg)[1]
                // console.log(fnName, 'fnName', arg)
                oItem.addEventListener(event.type, function () {
                    methods[fnName](arg)
                })
            }
        }
    })
}