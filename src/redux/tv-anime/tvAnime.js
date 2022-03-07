import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import getAnime from '../util/APIHandling';

const fetchTvAnime = createAsyncThunk(
  'tvAnime/fetchTvAnime',
  async () => {
    const response = await getAnime('tv');
    return response;
  },
);

export { fetchTvAnime };

const reducer = createReducer([], (builder) => {
  builder.addCase(fetchTvAnime.fulfilled, (state, action) => [...state, ...action.payload.data]);
});

export default reducer;
