// FILE: src/pages/Notes.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Notes from './Notes';
import CreateNote from './CreateNote';
import { useNavigate } from 'react-router-dom';

jest.mock('uuid', () => ({
    v4: jest.fn(() => '1234'),
}));

jest.mock('../components/useCreateDate', () => jest.fn(() => '2023-10-10'));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('Notes', () => {
    const notes = [
        { id: '1', title: 'Note 1', details: 'Details 1' },
        { id: '2', title: 'Note 2', details: 'Details 2' },
    ];

    const setNotes = jest.fn();
    const navigate = jest.fn();

    beforeEach(() => {
        useNavigate.mockReturnValue(navigate);
    });

    test('renders Notes component', () => {
        render(
            <MemoryRouter>
                <Notes notes={notes} />
            </MemoryRouter>
        );

        expect(screen.getByText('My Notes')).toBeInTheDocument();
        expect(screen.getByText('ADD')).toBeInTheDocument();
    });

    test('toggles search input', () => {
        render(
            <MemoryRouter>
                <Notes notes={notes} />
            </MemoryRouter>
        );

        const searchButton = screen.getByRole('button');
        fireEvent.click(searchButton);
        expect(screen.getByPlaceholderText('Keywords...')).toBeInTheDocument();

        fireEvent.click(searchButton);
        expect(screen.queryByPlaceholderText('Keywords...')).not.toBeInTheDocument();
    });

    test('filters notes based on search input', () => {
        render(
            <MemoryRouter>
                <Notes notes={notes} />
            </MemoryRouter>
        );

        const searchButton = screen.getByRole('button');
        fireEvent.click(searchButton);

        const searchInput = screen.getByPlaceholderText('Keywords...');
        fireEvent.change(searchInput, { target: { value: 'Note 1' } });

        expect(screen.getByText('Note 1')).toBeInTheDocument();
        expect(screen.queryByText('Note 2')).not.toBeInTheDocument();
    });

    test('displays "No Notes Found!" when no notes match search input', () => {
        render(
            <MemoryRouter>
                <Notes notes={notes} />
            </MemoryRouter>
        );

        const searchButton = screen.getByRole('button');
        fireEvent.click(searchButton);

        const searchInput = screen.getByPlaceholderText('Keywords...');
        fireEvent.change(searchInput, { target: { value: 'Nonexistent Note' } });

        expect(screen.getByText('No Notes Found!')).toBeInTheDocument();
    });

    test('renders notes', () => {
        render(
            <MemoryRouter>
                <Notes notes={notes} />
            </MemoryRouter>
        );

        expect(screen.getByText('Note 1')).toBeInTheDocument();
        expect(screen.getByText('Note 2')).toBeInTheDocument();
    });

    test('navigates to create note page on "ADD" button click', () => {
        render(
            <MemoryRouter>
                <Notes notes={notes} />
            </MemoryRouter>
        );

        const addButton = screen.getByRole('link', { name: 'ADD' });
        expect(addButton).toHaveAttribute('href', '/create-note');
    });
});
