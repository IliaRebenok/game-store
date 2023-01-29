import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import classNames from 'classnames';
import './button-delete.css'

export default function ButtonDelete(props) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCart(props.game.id));
    }

    const btnClass = classNames({
        'btn-delete': true,
        'btn-delete--small': props.size === 's',
        'btn-delete--medium': props.size === 'm',
    })

    return (
        <>
            <AiOutlineCloseCircle 
                        size={25}
                        className='btnClass'
                        onClick={handleClick}
                        />
        </>
    )
}
