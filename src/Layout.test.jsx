import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

test('renders the layout with correct elements', () => {
    render(<Layout />, { wrapper: BrowserRouter });

    // Header
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    const titleElement = screen.getByText('Marvel App');
    expect(titleElement).toBeInTheDocument();

    // Navigation
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');

    // Content
    const outletElement = screen.getByRole('main');
    expect(outletElement).toBeInTheDocument();

    // Footer
    const footerElement = screen.getByText(/Marvel App - 2024 - /);
    expect(footerElement).toBeInTheDocument();

});