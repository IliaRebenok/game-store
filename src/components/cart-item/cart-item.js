import React from 'react'
import './cart-item.css'

export default function CartItem(props) {
    

    return (
        <div className='cart-item'>
            <spzn>{props.title}</spzn>
            <div className='cart-item__price'>
                <span>{props.price} $</span>
            </div>
        </div>
    )
}
