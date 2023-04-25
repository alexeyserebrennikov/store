import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import GenreMenu from './GenreMenu';

const NavTabs = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Button color='inherit' component={Link} to='/'>Home</Button>
      <Button color='inherit' component={Link} to='/catalog'>Catalog</Button>
      <GenreMenu />
    </Box>
  );
}

export default NavTabs