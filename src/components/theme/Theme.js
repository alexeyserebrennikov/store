import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTheme } from '../../reducers/theme/reducer'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Theme = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  
  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(setCurrentTheme(next))
  }

  return (
    <IconButton sx={{ ml: 1, mx: 2 }} onClick={handleChange} color="inherit">
      {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default Theme
