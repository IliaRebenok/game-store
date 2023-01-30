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




    return (
        <div>
            <AiOutlineCloseCircle 
                        size={props.size}
                        className='btnClass'
                        onClick={handleClick}
                        />
        </div>
    )
}
