import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

jest.mock('react-slick', () => (props) => <span>{props.children}</span>);
// jest.mock('slick-carousel/slick/slick.css');
// jest.mock('slick-carousel/slick/slick-theme.css');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Michelle Mendonça/);
  console.log(linkElement, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  // expect(linkElement).toBe;
});
