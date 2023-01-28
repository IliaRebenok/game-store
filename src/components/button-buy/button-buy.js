import classNames from 'classnames'
import React from 'react'
import './button-buy.css'


export default function ButtonBuy(props) {

    const btnClass = classNames({
        'btn': true,
        'btn--secondary': props.type === 'secondary',
        'btn--primary': props.type === 'primary',
        'btn--small': props.size === 's',
        'btn--medium': props.size === 'm',
    })

    return (
        <button className={btnClass} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
