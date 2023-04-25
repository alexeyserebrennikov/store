import React from 'react'
import { useParams } from 'react-router-dom'
import gamesData from '../data/games.json'
import { Box, Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material'

const GamePage = () => {
  const {id} = useParams()

  const getGameById = (id) => {
    const game = gamesData.games.find(games => games.id === +id)
    return game 
  }

  const gameData = getGameById(id)
  
  return (
    <>
      <Grid
        container
        justifyContent="center"
      >
        <Box>
          <Card>
            <CardMedia
              sx={{ height: 0,
                    paddingTop: "56.25%", }}
              image={gameData.image}
              title={gameData.title}
            />
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                {gameData.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Издатель: {gameData.publisher} | Дата выхода: {gameData.date}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Жанры: {gameData.genre.join(", ")}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Платформы: {gameData.platform.join(", ")}
              </Typography>
              <Typography variant="h5" gutterBottom>
                ${gameData.price}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Оценка: <Rating name="read-only" value={gameData.rating} readOnly />
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  )
}

export default GamePage
