import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography 
        variant="h1" 
      >
        404
      </Typography>
      <Typography 
        variant="h6" 
      >
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button onClick={() => navigate('/')} variant="contained">Back Home</Button>
    </Box>
  )
}

export default NotFoundPage
