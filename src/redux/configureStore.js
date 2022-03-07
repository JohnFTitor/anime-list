import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tvAnimeReducer from './tv-anime/tvAnime';

const store = configureStore({
  reducer: {
    tvAnime: tvAnimeReducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(logger)
  ),
});

export default store;
