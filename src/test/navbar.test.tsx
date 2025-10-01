import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar';

const renderNavBar = () => {
  return render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
};

describe('NavBar Component', () => {
  it('renders desktop navigation with all links', () => {
    renderNavBar();

    const projectLinks = screen.getAllByText('Project');
    const aboutLinks = screen.getAllByText('About');
    const contactLinks = screen.getAllByText('Contact');

    expect(projectLinks.length).toBeGreaterThan(0);
    expect(aboutLinks.length).toBeGreaterThan(0);
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('renders mobile navigation menu button', () => {
    renderNavBar();

    const menuButtons = screen.getAllByLabelText('Toggle menu');
    expect(menuButtons.length).toBeGreaterThan(0);
  });

  it('toggles mobile menu on button click', async () => {
    renderNavBar();

    const menuButtons = screen.getAllByLabelText('Toggle menu');
    const mobileMenuButton = menuButtons[menuButtons.length - 1];

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation menu' })).not.toBeInTheDocument();

    fireEvent.click(mobileMenuButton);

    await waitFor(() => {
      expect(screen.getByRole('navigation', { name: 'Mobile navigation menu' })).toBeInTheDocument();
    });
  });

  it('closes mobile menu when clicking a link', async () => {
    renderNavBar();

    const menuButtons = screen.getAllByLabelText('Toggle menu');
    const mobileMenuButton = menuButtons[menuButtons.length - 1];

    fireEvent.click(mobileMenuButton);

    await waitFor(() => {
      expect(screen.getByRole('navigation', { name: 'Mobile navigation menu' })).toBeInTheDocument();
    });

    const mobileMenu = screen.getByRole('navigation', { name: 'Mobile navigation menu' });
    const projectLink = mobileMenu.querySelector('a[href="/project"]');

    if (projectLink) {
      fireEvent.click(projectLink);

      await waitFor(() => {
        expect(screen.queryByRole('navigation', { name: 'Mobile navigation menu' })).not.toBeInTheDocument();
      });
    }
  });

  it('closes mobile menu on Escape key press', async () => {
    renderNavBar();

    const menuButtons = screen.getAllByLabelText('Toggle menu');
    const mobileMenuButton = menuButtons[menuButtons.length - 1];

    fireEvent.click(mobileMenuButton);

    await waitFor(() => {
      expect(screen.getByRole('navigation', { name: 'Mobile navigation menu' })).toBeInTheDocument();
    });

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByRole('navigation', { name: 'Mobile navigation menu' })).not.toBeInTheDocument();
    });
  });

  it('has proper ARIA attributes for accessibility', () => {
    renderNavBar();

    const menuButtons = screen.getAllByLabelText('Toggle menu');
    const mobileMenuButton = menuButtons[menuButtons.length - 1];

    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false');
    expect(mobileMenuButton).toHaveAttribute('aria-controls', 'mobile-menu');
  });
});
