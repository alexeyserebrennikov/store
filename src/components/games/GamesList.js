import React from 'react'
import GameCard from './GameCard'
import { useParams } from 'react-router-dom';

const GamesList = ({ games }) => {
  const { id } = useParams();
  const genre = id?.split('__').join(' ');
  const filterGames = (genre) => {
    return games.filter(game => game.genre.includes(genre))
  };
  const filteredGames = id === undefined ? games : filterGames(genre)

  return (
    <>
      {filteredGames.map(game => (
      
        <div key={game.id}>
          <GameCard 
          { ...game } />
        </div>
        
      ))}
    </>
    
  )
}

export default GamesList

