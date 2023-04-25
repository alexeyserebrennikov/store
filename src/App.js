import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import GamePage from './pages/GamePage';
import { ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import OrderPage from './pages/OrderPage';

function App() {
  const themeMode = useSelector((state) => state.theme)

  const toggleTheme = useMemo(() =>createTheme({
    palette: {
      mode: themeMode,
      
    },
  }), [themeMode]);

  return (
    <ThemeProvider theme={toggleTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogPage />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
