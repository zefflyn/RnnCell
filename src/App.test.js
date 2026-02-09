// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RnnCell title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RnnCell/i);
    expect(titleElement).toBeInTheDocument();
});
