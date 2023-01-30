import React from 'react'
import ButtonDelete from '../button-delete/button-delete'
import './cart-item.css'

export default function CartItem(props) {
    

    return (
        <div className='cart-item'>
            <spzn>{props.title}</spzn>
            <div className='cart-item__price'>
                <span className='cart-item__price-right'>{props.price} $</span>
                <ButtonDelete game={props.game} size={20}/>
            </div>
        </div>
    )
}
