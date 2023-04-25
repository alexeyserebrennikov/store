import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../../reducers/cart/reducer'
import { ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const CartItem = ({ title, price, id }) => {
  const dispatch = useDispatch()

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteCartItem(id))
  }

  return (
    <>
    <ListItem>
      <ListItemText
        primary={title}
        secondary={`$${price}`}
        className='mr-2'
      />
      <DeleteIcon onClick={handleDelete} />
    </ListItem>
    </>
    
  )
}

export default CartItem
