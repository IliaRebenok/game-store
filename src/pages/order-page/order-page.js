import React from 'react'
import './order-page.css'
import ItemsInCart from '../../components/items-in-cart/items-in-cart';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/order-item/order-item';
import { calcTotalPrice } from '../../components/utils';

export default function OrderPage(props) {
    const items = useSelector(state => state.cart.itemsInCart)

    if(items.length < 1) {
        return <h1 className='order-page'>Cart is empty</h1>
    }

    return (
        <div className='order-page'>
            <div className='order-page__left'>
                {items.map(game => <OrderItem game={game} />)}
            </div>
            <div className='order-page__right'>
                <div className='order-page__total-price'>
                    <span>
                        {items.length} items, in total {calcTotalPrice(items)} $
                    </span>
                </div>
            </div>
        </div>
    )
}
