import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders Label component', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText(/test label/i)).toBeInTheDocument();
});

test('renders Label in disabled state', () => {
  const { container } = render(<Label text="Test Label" isDisabled />);
  expect(container.firstChild).toHaveStyle('color: #ccc');
  expect(container.firstChild).toHaveStyle('cursor: not-allowed');
});