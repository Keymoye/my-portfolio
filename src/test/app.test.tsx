import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component (Home Page)', () => {
  it('renders the main heading with developer name', () => {
    render(<App />);

    expect(screen.getByText(/Maxwell Kimoi/i)).toBeInTheDocument();
  });

  it('renders the developer role description', () => {
    render(<App />);

    expect(screen.getByText(/Front-end/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend/i)).toBeInTheDocument();
    expect(screen.getByText(/Fullstack Developer/i)).toBeInTheDocument();
  });

  it('renders the profile initials', () => {
    render(<App />);

    expect(screen.getByText(/MK/i)).toBeInTheDocument();
  });

  it('renders the developer description', () => {
    render(<App />);

    expect(
      screen.getByText(/Crafting intuitive interfaces and clean code/i)
    ).toBeInTheDocument();
  });
});
