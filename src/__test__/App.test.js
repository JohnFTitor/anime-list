import React from 'react';
import { setupServer } from 'msw/node';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from './util/test-util';
import HomePage from '../components/HomePage';
import App from '../App';
import handlers from './mock/handlers';
import '@testing-library/jest-dom';
import pageDetailsReducer, { changeCategory, changeType, changePage } from '../redux/pageDetails/pageDetails';

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen({
  onUnhandledRequest: 'error',
}));

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Redux pure functions testing', () => {
  test('Change Category', () => {
    const action = changeCategory('Action');
    const initialState = {
      category: 'All',
      type: 'tvAnime',
      currentPage: 'Home page',
    };

    const newState = pageDetailsReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, category: 'Action' });
  });
  test('Change Type', () => {
    const action = changeType('movieAnime');
    const initialState = {
      category: 'All',
      type: 'tvAnime',
      currentPage: 'Home page',
    };

    const newState = pageDetailsReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, type: 'movieAnime' });
  });
  test('Change Page', () => {
    const action = changePage('Steins;Gate');
    const initialState = {
      category: 'All',
      type: 'tvAnime',
      currentPage: 'Home page',
    };

    const newState = pageDetailsReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, currentPage: 'Steins;Gate' });
  });
});

describe('Home Page', () => {
  test('Retrieves data from API', async () => {
    render(<HomePage />);

    const text = await waitFor(() => screen.getByText('Test Anime Title: 1'));
    const score = screen.getAllByTestId('score')[0];
    expect(text).toBeInTheDocument();
    expect(score.textContent).toBe('9.8');
  });
  test('All cards are being displayed', async () => {
    render(<HomePage />);

    await waitFor(() => screen.getByText('Test Anime Title: 1'));
    const cards = document.querySelectorAll('.anime-card');

    expect(cards).toHaveLength(2);
  });
  test('All cards are of type "tv"', async () => {
    render(<HomePage />);

    const typeArray = await waitFor(() => screen.getAllByText('tv'));

    typeArray.forEach((type) => {
      expect(type.textContent).toBe('tv');
    });
  });
});

describe('Navigation', () => {
  test('Retrieves movies instead of tv animes', async () => {
    render(<App />);

    const typeArray = await waitFor(() => screen.getAllByText('tv'));

    typeArray.forEach((type) => {
      expect(type.textContent).toBe('tv');
    });

    const settingsButton = screen.getByTestId('settings');

    fireEvent.click(settingsButton);

    const selectType = screen.getByTestId('typeSelector');

    fireEvent.change(selectType, { target: { value: 'movieAnime' } });

    const newTypeArray = await waitFor(() => screen.getAllByText('movie'));

    newTypeArray.forEach((type) => {
      expect(type.textContent).toBe('movie');
    });
  });
});

describe('Details Page', () => {
  test('Retrieves data from the specific id', async () => {
    render(<App />);

    const card = await waitFor(() => screen.getByTestId('1-card'));

    fireEvent.click(card);

    const sypnosis = await waitFor(() => screen.getByText(/My Story/i));

    expect(sypnosis).toBeInTheDocument();
  });
});
