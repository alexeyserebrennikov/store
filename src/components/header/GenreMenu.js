import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { getGenres } from '../../services/services';
import { useNavigate } from 'react-router-dom';

const GenreMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const genres = getGenres()
  const navigate = useNavigate()

  return (
    <>
      <Button
        color="inherit"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categories
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}

        PaperProps={{
          style: {
            transform: 'translateX(-20%) translateY(5%)',
          }
        }}
      >
        {genres.map((genre, index) => (
          <MenuItem 
            key={index} 
            onClick={() => navigate(`catalog/${genre.split(' ').join('__')}`)}
          >
            {genre}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default GenreMenu


