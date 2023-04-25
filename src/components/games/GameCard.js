import React from 'react'
import GenresBadgeList from './GenresBadgeList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import AddToCart from './AddToCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../reducers/games/reducer';

const GameCard = ({ ...game }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/game/${game.id}`)    
  }
  
  return (
    <>
      <Card 
        className='my-4'
        sx={{ maxWidth: 345 }}
      >
        <CardActionArea
          onClick={handleClick}
        >
          <CardMedia
            component="img"
            height="140"
            image={game.image} 
            alt={game.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {game.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Издатель: {game.publisher}
            </Typography>
            <GenresBadgeList list={[...game.genre]} />
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h5" component="div">
            ${game.price}
          </Typography>
          <AddToCart {...game}/>
        </CardActions>
      </Card>
    </>
  )
}

export default GameCard


