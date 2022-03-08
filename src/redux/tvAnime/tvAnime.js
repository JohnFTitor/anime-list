import generateReducer from '../util/reducerGenerator';

const { fetchAnime: fetchTvAnime, reducer } = generateReducer('tvAnime', 'tv');

export { fetchTvAnime };

export default reducer;
