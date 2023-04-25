import React from 'react'
import data from '../data/games'
import GamesList from '../components/games/GamesList'
import { Box, Grid } from '@mui/material'

const CatalogPage = () => {

  return (
    <>
      <Grid
        container
        justifyContent="center"
      >
        <Box>
          <GamesList {...data} />
        </Box>
      </Grid>
    </>
  )
}

export default CatalogPage
