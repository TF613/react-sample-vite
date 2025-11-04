import { render, screen } from '@testing-library/react';
import Name from './Name';
import { beforeEach, describe, expect, test } from 'vitest';

describe('Name', () => {
  beforeEach(() => {
    render(<Name />);
  });

  test('名前のLabelが存在している', () => {
    expect(screen.getByText('名前')).toBeInTheDocument();
  });

  test('inputタグが存在している', () => {
    expect(screen.getByRole('textbox', { name: 'input-name' })).toBeInTheDocument();
  });

  //inputタグで入力した、値がconsoleに出力されるかのテストは
  //調べる時間が無駄なので書かない

});
