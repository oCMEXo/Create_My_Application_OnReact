import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import App from './App.jsx'


const element =  <div>Hello World!
<p>pop</p>
</div>


const formatAddress = (address) => {
    return address.city + ', ' + address.street + address.house
}




const address = {
    city: 'Vilnius',
    street: 'Sausion',
    house: '78',
    apart: '12'
}

const inventation = address1 => {
    if(address1) {
        return <div>Welcome to {address1.city}</div>
    }
    return <h1>See you next time</h1>
}



const addressBlog = <div> Hello {inventation(address)}</div>

createRoot(document.getElementById('root')).render(addressBlog)
