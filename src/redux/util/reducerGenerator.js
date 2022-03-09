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

  const changeCategory = createAction(`${name}/changeCategory`);

  const reducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchAnime.fulfilled, (state, action) => ({
      data: action.payload,
      dataFiltered: action.payload,
      status: 'completed',
    }));
    builder.addCase(changeCategory, (state, action) => ({
      ...state,
      dataFiltered: state.data.filter((anime) => anime.genres.includes(action.payload)),
    }));
  });

  return { fetchAnime, reducer };
};

export default generateReducer;
