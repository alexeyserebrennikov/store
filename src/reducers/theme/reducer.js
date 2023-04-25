import { createSlice } from "@reduxjs/toolkit";

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  if (['light', 'dark'].includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return 'light'

  return 'dark'
}

const initialState = getTheme()

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setCurrentTheme: (state, action) => action.payload,
  }
})

export const { setCurrentTheme } = themeSlice.actions;
export default themeSlice.reducer;