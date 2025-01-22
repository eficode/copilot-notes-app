// FILE: src/pages/CreateNote.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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

describe('CreateNote', () => {
  const setNotes = jest.fn();
  const navigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(navigate);
  });

  test('renders CreateNote component', () => {
    render(
      <MemoryRouter>
        <CreateNote setNotes={setNotes} />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Notes Details...')).toBeInTheDocument();
  });

  test('creates a new note and navigates to home on form submission', () => {
    render(
      <MemoryRouter>
        <CreateNote setNotes={setNotes} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByPlaceholderText('Notes Details...'), { target: { value: 'Test Details' } });

    fireEvent.click(screen.getByText('Save'));

    expect(setNotes).toHaveBeenCalledWith(expect.any(Function));
    expect(navigate).toHaveBeenCalledWith('/');
  });
});