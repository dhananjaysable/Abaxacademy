import { render, screen } from '@testing-library/react';
import Courses from './Courses';

describe('Courses', () => {
  it('renders the choose your course heading', () => {
    render(<Courses />);
    const heading = screen.getByRole('heading', { level: 2, name: /Choose Your Course/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders all 6 course buttons', () => {
    render(<Courses />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(6);
  });

  it('renders buttons with correct course names', () => {
    render(<Courses />);
    const expectedCourses = [
      "Alguns",
      "About Al",
      "Voice Math",
      "Hand Writing",
      "Monteesoft",
      "Phonic"
    ];

    expectedCourses.forEach(courseName => {
      const button = screen.getByRole('button', { name: courseName });
      expect(button).toBeInTheDocument();
    });
  });
});
