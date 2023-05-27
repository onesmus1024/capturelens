import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders header component', () => {
    render(<App />);
    const headerElement = screen.getByText(/about/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders contact route', () => {
    render(<App />);
    const homeRoute = screen.getByText(/contact/i);
    expect(homeRoute).toBeInTheDocument();
  });
});