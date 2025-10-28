import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest'
import App from './App';
test('renders message', () => {
  render(<App />);
  expect(screen.getByText("Click on the Vite and React logos to learn more")).toBeInTheDocument();
});