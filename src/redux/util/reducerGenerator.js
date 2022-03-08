import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
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
    status: 'iddle',
  };

  const reducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchAnime.fulfilled, (state, action) => ({
      data: action.payload,
      status: 'completed',
    }));
  });

  return { fetchAnime, reducer };
};

export default generateReducer;
