import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import App from './App.jsx'

const itemsConfig = [
    {name: 'Apple', price: "1300", model: 'Iphone 16pro max', id: '12'},
    {name: 'Samsung', price: "2500", model: 's24 ultra', id: '11'},
]


const listOfItems = <div>
    {itemsConfig.map((items) => <div className='wrapper' key={items.id}>
        <div>{items.name}</div>
        <div>{items.model}</div>
        <div>{items.price}</div>
    </div>)}
</div>


createRoot(document.getElementById('root')).render(listOfItems)
