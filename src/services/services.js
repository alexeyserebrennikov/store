import data from '../data/games';

export const getGames = () => data.games

export const getGenres = () => {
  const genres = [];
  data.games.forEach(game => {
    game.genre.forEach(g => {
      if (!genres.includes(g)) {
        genres.push(g);
      }
    });
  });
  return genres;
};
