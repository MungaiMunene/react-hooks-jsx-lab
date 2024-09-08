import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import About from '../components/About'; // Adjust the import path based on your project structure

test('renders the image with correct src and alt text', () => {
  render(<About />);
  const img = screen.getByAltText('About');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://i.imgur.com/mV8PQxj.gif'); // Check the image URL
});