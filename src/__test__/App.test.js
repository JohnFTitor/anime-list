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

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen({
  onUnhandledRequest: 'error',
}));

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Home Page', () => {
  test('Retrieves data from API', async () => {
    render(<HomePage />);

    const text = await waitFor(() => screen.getByText('Test Anime Title: 1'));
    const score = screen.getAllByTestId('score')[0];
    expect(text).toBeInTheDocument();
    expect(score.textContent).toBe('9.8');
  });
});
