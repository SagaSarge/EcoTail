import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../../src/components/common/Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled styles when disabled', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toHaveClass('opacity-50');
  });
}); 