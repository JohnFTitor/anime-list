import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Reducers
import tvAnimeReducer from '../../redux/tvAnime/tvAnime';
import movieAnimeReducer from '../../redux/movieAnime/movieAnime';
import specialAnimeReducer from '../../redux/specialAnime/specialAnime';
import musicAnimeReducer from '../../redux/musicAnime/musicAnime';
import onaAnimeReducer from '../../redux/onaAnime/onaAnime';
import ovaAnimeReducer from '../../redux/ovaAnime/ovaAnime';
import pageDetailsReducer from '../../redux/pageDetails/pageDetails';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        tvAnime: tvAnimeReducer,
        movieAnime: movieAnimeReducer,
        specialAnime: specialAnimeReducer,
        musicAnime: musicAnimeReducer,
        onaAnime: onaAnimeReducer,
        ovaAnime: ovaAnimeReducer,
        pageDetails: pageDetailsReducer,
      },
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
