import generateReducer from '../util/reducerGenerator';

const { fetchAnime: fetchSpecialAnime, reducer } = generateReducer('specialAnime', 'special');

export { fetchSpecialAnime };

export default reducer;
