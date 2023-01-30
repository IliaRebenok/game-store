import React from 'react'
import './cart-menu.css'
import { calcTotalPrice } from '../utils';
import ButtonBuy from '../button-buy/button-buy';
import CartItem from '../cart-item/cart-item';

export default function CartMenu(props) {

    return (
        <div className='cart-menu'>
            <div className='cart-menu__games-list'>
                {
                    props.items.length > 0
                        ? props.items.map((game) => (
                            <CartItem
                                key={game.title}
                                price={game.price}
                                title={game.title}
                                id={game.id}
                                game={game}
                            />
                            
                        ))
                        : 'cart is empty'
                }
            </div>
            {
                props.items.length > 0 ?
                    <div className='cart-menu__arrange'>
                        <div className='cart-menu__total-price'>
                            <span>Total: </span>
                            <span>{calcTotalPrice(props.items)} $</span>
                            
                        </div>
                        <ButtonBuy type='primary' size='m' onClick={props.onClick}>
                            Checkout
                        </ButtonBuy>
                    </div>
                    : null
            }
        </div>
    )
}
