import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const eement= {
    type:'a',
    props: {
        href: "https://google.com",
        target:'_blank'
    },
    children:'Click me to visit google'
}

function MyApp(){
    return(
        <div>
            <h1>Custom React app</h1>
        </div>
    )
}
const AnotherElement = (
    <a href='https://google.com' target='_blank'>Visit google from another link</a>
)

//convert to object
const reactElement= React.createElement(
    'a',
   {
        href: "https://google.com",
        target:'_blank'
    },
    'Click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // reactElement
    <App />
  
)
