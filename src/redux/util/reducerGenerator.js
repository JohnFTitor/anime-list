import { createAsyncThunk, createReducer, createAction } from '@reduxjs/toolkit';
import getAnime from './APIHandling';

const generateReducer = (name, type) => {
  const fetchAnime = createAsyncThunk(
    `${name}/fetchAnime`,
    async () => {
      const response = await getAnime(type);
      return response;
    },
  );

  const initialState = {
    data: [],
    dataFiltered: [],
    status: 'iddle',
  };

  const filterAnime = createAction(`${name}/filterAnime`);

  const reducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchAnime.fulfilled, (state, action) => ({
      data: action.payload,
      dataFiltered: action.payload,
      status: 'completed',
    }));
    builder.addCase(filterAnime, (state, action) => ({
      ...state,
      dataFiltered: action.payload === 'All' ? state.data : state.data.filter((anime) => {
        for (let i = 0; i < anime.genres.length; i += 1) {
          const genre = anime.genres[i];
          if (genre.name === action.payload) {
            return true;
          }
        }
        return false;
      }),
    }));
  });

  return { filterAnime, fetchAnime, reducer };
};

export default generateReducer;
