import { useDispatch, useSelector } from "react-redux"
import { setCartItem, deleteCartItem } from "../../reducers/cart/reducer";
import { Button } from "@mui/material";

const AddToCart = ({ ...game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const isCartItem = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isCartItem) {  
      dispatch(deleteCartItem(game.id))
    } else {
      dispatch(setCartItem(game))
    }
  }

  return (
    <Button 
      variant="contained"
      onClick={handleClick}
    >
      {isCartItem ? "Delete from cart" : "Add to cart"}
    </Button>
  )
}

export default AddToCart