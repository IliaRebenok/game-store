import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reducer';
import GameBuy from '../game-buy/game-buy'
import GameCover from '../game-cover/game-cover'
import GameGenre from '../game-genre/game-genre'
import './game-item.css'

export default function GameItem(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentGame(props.game));
        navigate(`/app/${props.game.title}`)
    }

    return (
        <div className='game-item' onClick={handleClick}>
            <GameCover image={props.game.image} />
            <div className='game-item__details'>
                <span className='game-item__title'>{props.game.title}</span>
                <div className='game-item__genre'>
                    {
                        props.game.genres.map(genre => <GameGenre
                            genre={genre}
                            key={genre}
                        />)
                    }
                </div>
                <div className='game-item__buy'>
                    <GameBuy game={props.game} />
                </div>
            </div>
        </div>
    )
}
