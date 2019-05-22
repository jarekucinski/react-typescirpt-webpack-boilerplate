import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import App from '../App';

it('renders without crashing', () => {
  render(<App />)
})

test('basic', () => {
  expect(0).toBe(0);
})
