import generateReducer from '../util/reducerGenerator';

const { fetchAnime: fetchMovieAnime, filterAnime: filterAnimeMovie, reducer } = generateReducer('movieAnime', 'movie');

export { fetchMovieAnime, filterAnimeMovie };

export default reducer;
