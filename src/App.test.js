import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders header component', () => {
    render(<App />);
    const headerElement = screen.getByText(/header/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders home route', () => {
    render(<App />);
    const homeRoute = screen.getByText(/home/i);
    expect(homeRoute).toBeInTheDocument();
  });
});