import { configureStore } from '@reduxjs/toolkit';

import gamesReducer from '../reducers/games/reducer'
import cartReducer from '../reducers/cart/reducer'
import themeReducer from '../reducers/theme/reducer'

const store = configureStore({
  reducer: {
    games: gamesReducer,
    cart: cartReducer,
    theme: themeReducer
  }
})

export default store;
