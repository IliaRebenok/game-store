import React from 'react'
import './order-item.css'
import GameCover from '../game-cover/game-cover';
import ButtonDelete from '../button-delete/button-delete';

export default function OrderItem(props) {

    return (
        <div className='order-item'>
            <div className='order-item__cover'>
                <GameCover image={props.game.image} />
            </div>
            <div className='order-item__title'>
                <span>
                    {props.game.title}
                </span>
            </div>
            <div className='order-item__price'>
                <span>
                    {props.game.price} $
                </span>
                <ButtonDelete game={props.game}  />
            </div>

        </div>
    )
}
