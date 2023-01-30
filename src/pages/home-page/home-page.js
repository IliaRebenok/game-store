import GameItem from "../../components/game-item/game-item"
import "./home-page.css"


const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Races', 'Simulator', 'Open world'],
        price: 76,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: `Forza Horizon 5 is a racing video game set in an open world environment based in a fictional representation of Mexico. The game has the largest map in the entire Forza Horizon series, being 50% larger than its predecessor, Forza Horizon 4, while also having the highest point in the Horizon series.`
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Action', 'Shooter', 'War'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 70,
        id: 2,
        description: `Battlefield 2042 marks the return to the iconic all-out warfare of the franchise. Adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal. With support for 128 players*, prepare for unprecedented scale on vast environments.`
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Fine gameplay', 'Protagonistics'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 88,
        id: 3,
        description: `Deep in the mountains of Colorado, you'll find Haven Springs, a small mining town filled with beauty and mystery. As Alex, you'll discover the shocking secrets behind your brother's death in an emotional roller-coaster of an adventure, using your psychic power of Empathy to change fate and change lives.`
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Open world', 'Action'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 33,
        id: 4,
        description: `Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.`
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Tacticks', 'Shooter'],
        price: 45,
        id: 5,
        description: `Tom Clancy's Rainbow Six Siege is a first-person shooter game, in which players utilize many different operators from the Rainbow team. Different operators have different nationalities, weapons, and gadgets.`
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Parkour', 'RPG', 'Open world'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 90,
        id: 6,
        description: `Assassin's Creed Valhalla is an action role-playing video game structured around several main story arcs and numerous optional side-missions, called "World Events". The player takes on the role of Eivor Varinsdottir (/ˈeɪvɔːr/), a Viking raider, as they lead their fellow Vikings against the Anglo-Saxon kingdoms.`
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">        
            {GAMES.map(game => <GameItem game={game} key={game.id}/>)}
        </div>
    )
}