import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import App from "./App"
test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  render(<App />);
  expect(linkElement).toBeInTheDocument();
});
