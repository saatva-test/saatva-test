import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';
import { get } from 'http';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('saatva_logo');
  expect(linkElement).toBeInTheDocument();
});

test('qty increases when ATC btn is clicked', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('typeBtn_classic'));
  fireEvent.click(screen.getByTestId('qtyBtn'));
  const cartElem = screen.getByTestId('cartQtySpan');
  expect(cartElem).toContainHTML("1");
});