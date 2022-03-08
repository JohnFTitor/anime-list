import generateReducer from '../util/reducerGenerator';

const { fetchAnime: fetchMovieAnime, reducer } = generateReducer('movieAnime', 'movie');

export { fetchMovieAnime };

export default reducer;
