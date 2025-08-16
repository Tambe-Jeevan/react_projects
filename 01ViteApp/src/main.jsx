import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )



const anotherUser = [1,2,3,4,5,'hello']

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    // anotherElement
    anotherUser
)


createRoot(document.getElementById('root'))
.render(
    reactElement
)
