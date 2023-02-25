// console.log('hello')

import { useDOM, useReactive } from '../MVVM/index.js'

function App() {

    const state = useReactive({
        count: 0,
        name: 'Terence'
    })

   

    const add = (num) => {
        state.count += num
    }

    const minus = (num) => {
        state.count -= num
    }

    const changeName = (name) => {
        state.name = name
    }

    return {
        template: `
            <h1>{{ count }}</h1>
            <h2>{{ name }}</h2>
            <button onClick="add(2)">+</button>
            <button onClick="minus(1)">-</button>
            <button onClick="changeName('Imtc')">change name</button>
        `,
        state,
        methods: {
            add,
            minus,
            changeName
        }
    }
}

useDOM(
    App(), // 执行后返回 template , state ,methods
    document.querySelector('#app')
)