import React from 'react';
import { setupServer } from 'msw/node';
import { render, screen } from './util/test-util';
import App from '../App';
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

test('Retrieves data from API', async () => {
  render(<App />);
  const text = screen.getByText('Hello Home Page');
  expect(text).toBeInTheDocument();
});
