import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock all the child components
vi.mock('./components/Header', () => ({ default: () => <header data-testid="header">Header</header> }));
vi.mock('./components/TopNavbar', () => ({ default: () => <nav data-testid="top-navbar">TopNavbar</nav> }));
vi.mock('./components/MainNavbar', () => ({ default: () => <nav data-testid="main-navbar">MainNavbar</nav> }));
vi.mock('./components/Welcome', () => ({ default: () => <section data-testid="welcome">Welcome</section> }));
vi.mock('./components/Benefits', () => ({ default: () => <section data-testid="benefits">Benefits</section> }));
vi.mock('./components/CertificateSection', () => ({ default: () => <section data-testid="certificate-section">CertificateSection</section> }));
vi.mock('./components/WhatWeDo', () => ({ default: () => <section data-testid="what-we-do">WhatWeDo</section> }));
vi.mock('./components/CourseSection', () => ({ default: () => <section data-testid="course-section">CourseSection</section> }));
vi.mock('./components/DirectionsRegistration', () => ({ default: () => <section data-testid="directions-registration">DirectionsRegistration</section> }));
vi.mock('./components/Footer', () => ({ default: () => <footer data-testid="footer">Footer</footer> }));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders all the layout components', () => {
    render(<App />);

    // Check for the presence of all components
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('top-navbar')).toBeInTheDocument();
    expect(screen.getByTestId('main-navbar')).toBeInTheDocument();
    expect(screen.getByTestId('welcome')).toBeInTheDocument();
    expect(screen.getByTestId('benefits')).toBeInTheDocument();
    expect(screen.getByTestId('certificate-section')).toBeInTheDocument();
    expect(screen.getByTestId('what-we-do')).toBeInTheDocument();
    expect(screen.getByTestId('course-section')).toBeInTheDocument();
    expect(screen.getByTestId('directions-registration')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('has the correct layout structure', () => {
    const { container } = render(<App />);

    // Check if the root div has the correct classes for min-height screen layout
    const rootDiv = container.firstChild;
    expect(rootDiv).toHaveClass('flex', 'flex-col', 'min-h-screen');

    // Check if main has the correct classes to flex grow
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass('flex-grow');
  });
});
