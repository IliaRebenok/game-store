import React from 'react'
import './order-item.css'


export default function OrderItem(props) {
    

    return (
        <div className='order-item'>
            {props.game.title}
        </div>
    )
}
