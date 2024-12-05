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





const addressBlog = <>User address: {formatAddress(address)}</>

createRoot(document.getElementById('root')).render(addressBlog)
