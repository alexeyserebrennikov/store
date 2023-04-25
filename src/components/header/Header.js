import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Asynchronous from './Asynchronous';
import NavTabs from './NavTabs';
import CartBadge from '../cart/CartBadge';
import Theme from '../theme/Theme';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <NavTabs/>
          <Theme />
          <Asynchronous />
          <CartBadge />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header