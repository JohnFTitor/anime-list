import generateReducer from '../util/reducerGenerator';

const { fetchAnime: fetchOnaAnime, reducer } = generateReducer('onaAnime', 'ona');

export { fetchOnaAnime };

export default reducer;
