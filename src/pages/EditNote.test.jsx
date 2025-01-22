// FILE: src/pages/EditNote.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useParams, useNavigate } from 'react-router-dom';
import EditNote from './EditNote';
import useCreateDate from '../components/useCreateDate';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

jest.mock('../components/useCreateDate', () => jest.fn(() => '2023-10-10'));

describe('EditNote', () => {
  const setNotes = jest.fn();
  const navigate = jest.fn();
  const notes = [
    { id: '1', title: 'Note 1', details: 'Details 1' },
    { id: '2', title: 'Note 2', details: 'Details 2' },
  ];

  beforeEach(() => {
    useParams.mockReturnValue({ id: '1' });
    useNavigate.mockReturnValue(navigate);
  });

  test('renders EditNote component', () => {
    render(
      <MemoryRouter>
        <EditNote notes={notes} setNotes={setNotes} />
      </MemoryRouter>
    );

    expect(screen.getByDisplayValue('Note 1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Details 1')).toBeInTheDocument();
  });

  test('updates note and navigates to home on form submission', () => {
    render(
      <MemoryRouter>
        <EditNote notes={notes} setNotes={setNotes} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByDisplayValue('Note 1'), { target: { value: 'Updated Title' } });
    fireEvent.change(screen.getByDisplayValue('Details 1'), { target: { value: 'Updated Details' } });

    fireEvent.click(screen.getByText('Save'));

    expect(setNotes).toHaveBeenCalledWith(expect.any(Array));
    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('deletes note and navigates to home on delete button click', () => {
    window.confirm = jest.fn(() => true);

    render(
      <MemoryRouter>
        <EditNote notes={notes} setNotes={setNotes} />
      </MemoryRouter>
    );

    const deleteIcon = screen.getByTestId('delete-icon');
    fireEvent.click(deleteIcon);

    expect(setNotes).toHaveBeenCalledWith(notes.filter(note => note.id !== '1'));
    expect(navigate).toHaveBeenCalledWith('/');
  });
});