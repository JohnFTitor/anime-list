import generateReducer from '../util/reducerGenerator';

const { fetchAnime: fetchOvaAnime, filterAnime: filterAnimeOva, reducer } = generateReducer('ovaAnime', 'ova');

export { fetchOvaAnime, filterAnimeOva };

export default reducer;
