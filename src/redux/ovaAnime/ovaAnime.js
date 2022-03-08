import generateReducer from '../util/reducerGenerator';

const { fetchAnime: fetchOvaAnime, reducer } = generateReducer('ovaAnime', 'ova');

export { fetchOvaAnime };

export default reducer;
