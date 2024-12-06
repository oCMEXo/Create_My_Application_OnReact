import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import App from './App.jsx'


const address = {
    city: 'Vilnius',
    street: 'Sausion',
    house: '78',
    apart: '12',

}



const addressBlog = <div>
    {address.city ? <div>Welcome your city: {address.city}</div> : <div>Provide your address</div>}
    {address.city && <div>Welcome your street: {address.street}</div>}
</div>

createRoot(document.getElementById('root')).render(addressBlog)
