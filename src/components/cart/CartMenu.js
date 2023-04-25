import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { calcTotalPrice } from '../utils/calcTotalPrice'
import { Button, List, ListItem} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { deleteAllCartItems } from '../../reducers/cart/reducer'

const CartMenu = () => {
  const items = useSelector((state) => state.cart.cartItems)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteAllCartItems())
    navigate('/order')
  };

  return (
    <>
      <List>
          {items && items?.length > 0
            ? items.map((game) => (
              <CartItem
                key={game.id}
                image={game.image}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
            : "Корзина пуста"
          }
        {items?.length > 0 ? (
          <>
          <ListItem disablePadding></ListItem>
          <ListItem>
            <div className='mr-2'>
              <span>Итого: </span>
              <span>{calcTotalPrice(items)}</span>
            </div>
            <Button 
              className='mx-2'
              variant="contained"
              onClick={handleClick}
            >
              Оформить заказ
            </Button>
          </ListItem>
          </>
        ) : null}
      </List>
    </>
  )
}

export default CartMenu
