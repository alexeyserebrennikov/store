import { Badge, Menu, MenuItem } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import CartMenu from './CartMenu';

const CartBadge = () => {
  const items = useSelector((state) => state.cart.cartItems)
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Badge 
      badgeContent={items.length} 
      color="primary"
      onClick={handleMenu}
      sx={{ mx: 2}}
    >
      <ShoppingCartIcon color="action" />
    </Badge>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {items.length > 0 ? (
        <MenuItem>
          <CartMenu/>
        </MenuItem>
      ) : (
        <MenuItem onClick={handleClose}>Корзина Пуста</MenuItem>
      )} 
    </Menu>
  </>
  )
}

export default CartBadge
