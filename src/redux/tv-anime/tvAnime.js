import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import getAnime from '../util/APIHandling';

const fetchTvAnime = createAsyncThunk(
  'tvAnime/fetchTvAnime',
  async () => {
    const response = await getAnime('tv');
    return response.data;
  },
);

export { fetchTvAnime };

const reducer = createReducer({
  data: [],
  status: 'iddle',
}, (builder) => {
  builder.addCase(fetchTvAnime.fulfilled, (state, action) => ({
    data: action.payload,
    status: 'completed',
  }));
});

export default reducer;
