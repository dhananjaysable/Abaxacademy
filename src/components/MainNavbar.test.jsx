import { render, screen, fireEvent } from '@testing-library/react';
import MainNavbar from './MainNavbar';
import { describe, it, expect } from 'vitest';

describe('MainNavbar', () => {
  it('toggles menu state when hamburger button is clicked', () => {
    render(<MainNavbar />);

    // The menu container initially has the 'hidden' class
    const menuContainer = screen.getByRole('link', { name: /home/i }).closest('div');
    expect(menuContainer).toHaveClass('hidden');

    // Click the toggle button
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggleButton);

    // After clicking, the menu container should have the 'block' class instead of 'hidden'
    expect(menuContainer).toHaveClass('block');
    expect(menuContainer).not.toHaveClass('hidden');

    // Click again to close
    fireEvent.click(toggleButton);
    expect(menuContainer).toHaveClass('hidden');
    expect(menuContainer).not.toHaveClass('block');
  });
});
