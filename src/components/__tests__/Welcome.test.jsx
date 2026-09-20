import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Welcome from '../Welcome';

describe('Welcome Component', () => {
  it('renders heading', () => {
    render(<Welcome />);

    const heading = screen.getByRole('heading', { name: /Welcome To Abax Academy/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders subheading', () => {
    render(<Welcome />);

    const subheading = screen.getByRole('heading', { level: 3, name: /ABAX ACADEMY/i });
    expect(subheading).toBeInTheDocument();
  });

  it('renders text content', () => {
    render(<Welcome />);

    const text = screen.getByText(/Started in 2009/i);
    expect(text).toBeInTheDocument();
  });

  it('renders read more button', () => {
    render(<Welcome />);

    const button = screen.getByRole('button', { name: /Read more/i });
    expect(button).toBeInTheDocument();
  });

  it('renders student learning image', () => {
    render(<Welcome />);

    const image = screen.getByRole('img', { name: /Student learning/i });
    expect(image).toBeInTheDocument();
  });
});
