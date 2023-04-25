import React from 'react'
import { Chip } from '@mui/material'

const GenresBadgeList = ({list}) => {
  return (
    <ul className="my-2">
      {list.map((genre, i) => (
        <Chip 
          key={i} 
          label={genre} 
          className="m-1"
        />
      ))}
    </ul> 
  )
}

export default GenresBadgeList