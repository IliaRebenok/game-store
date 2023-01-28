import React from 'react'
import './game-genre.css'

export default function GameGenre(props) {
    

    return (
        <span className='game-genre'>
            {props.genre}
        </span>
    )
}
