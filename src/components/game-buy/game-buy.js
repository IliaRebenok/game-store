import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './game-buy.css'
import ButtonBuy from '../button-buy/button-buy';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';

export default function GameBuy(props) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === props.game.id)

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(props.game.id))
        } else {
            dispatch(setItemInCart(props.game));
        }

    }

    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{props.game.price} $</span>
            <ButtonBuy
                type={isItemInCart ? 'secondary' : 'primary'} 
                onClick={handleClick}
            >
                {isItemInCart ? 'delete from cart' : 'Add to cart'}
            </ButtonBuy>
        </div>
    )
}
