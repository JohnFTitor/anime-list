import React from 'react';
import { setupServer } from 'msw/node';
import {
  render,
  screen,
  waitFor,
} from './util/test-util';
import HomePage from '../components/HomePage';
import handlers from './mock/handlers';
import '@testing-library/jest-dom';
import filterinReducer, { changeCategory, changeType } from '../redux/filtering/filtering';

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
      category: 'all',
      type: 'tvAnime',
    };

    const newState = filterinReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, category: 'Action' });
  });
  test('Change Type', () => {
    const action = changeType('movieAnime');
    const initialState = {
      category: 'all',
      type: 'tvAnime',
    };

    const newState = filterinReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, type: 'movieAnime' });
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
});
