import { render, screen } from '@testing-library/react';
import Hello from './Hello';
import { expect, test } from 'vitest';

test('Helloのテキストが見える', () => {
  render(<Hello />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
