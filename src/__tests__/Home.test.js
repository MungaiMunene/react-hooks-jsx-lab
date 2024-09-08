import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import Home from '../components/Home'; // Update the import path based on your project structure

test('renders the h1 with the text "Name is a Web Developer from City"', () => {
  render(<Home />);
  const name = "YourName"; // Replace with actual value
  const city = "YourCity"; // Replace with actual value
  const h1 = screen.queryByText(`${name} is a Web Developer from ${city}`);
  expect(h1).toBeInTheDocument(); // Ensure this matcher is available
  expect(h1.tagName).toBe("H1"); // Check that the element is a <h1>
});

test('the h1 has an inline style attribute with a color of "firebrick"', () => {
  render(<Home />);
  const name = "YourName"; // Replace with actual value
  const city = "YourCity"; // Replace with actual value
  const h1 = screen.queryByText(`${name} is a Web Developer from ${city}`);
  expect(h1).toHaveStyle({ color: "firebrick" }); // Ensure this matcher is available
});