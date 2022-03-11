import generateReducer from '../util/reducerGenerator';

const { fetchAnime: fetchMusicAnime, filterAnime: filterAnimeMusic, reducer } = generateReducer('musicAnime', 'music');

export { fetchMusicAnime, filterAnimeMusic };

export default reducer;
