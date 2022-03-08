import generateReducer from '../util/reducerGenerator';

const { fetchAnime: fetchMusicAnime, reducer } = generateReducer('musicAnime', 'music');

export { fetchMusicAnime };

export default reducer;
