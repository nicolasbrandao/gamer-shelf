import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'
import CheckboxMenu from './'
import { updateFiltersSelection } from '../../store'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

describe('CheckboxMenu', () => {
  beforeEach(() => {
    useDispatch.mockReset()
    useSelector.mockReset()
  })

  test('renders the CheckboxMenu component without errors', () => {
    render(<CheckboxMenu data={{ title: 'Test Title', items: [] }} />)
  })

  test('renders the correct title', () => {
    const data = { title: 'Test Title', items: [] }
    render(<CheckboxMenu data={data} />)
    expect(screen.getByLabelText(data.title)).toBeInTheDocument()
  })

  test('renders the correct number of items', () => {
    const data = {
      title: 'Test Title',
      items: [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
      ],
    }
    render(<CheckboxMenu data={data} />)
    const items = screen.getAllByRole('menuitemcheckbox')
    expect(items.length).toBe(data.items.length)
  })

  test('clicking an item calls the handleClick function', () => {
    const data = { title: 'Test Title', items: [{ id: 1, title: 'Item 1' }] }
    const handleClick = jest.fn()
    render(<CheckboxMenu data={data} handleClick={handleClick} />)
    const item = screen.getByLabelText(`Item 1`)
    fireEvent.click(item)
    expect(handleClick).toHaveBeenCalledWith(data.items[0].id)
  })

  test('dispatches the correct action', () => {
    const data = { title: 'Test Title', items: [{ id: 1, title: 'Item 1' }] }
    const dispatch = jest.fn()
    const useSelectorMock = jest.spyOn(ReactRedux, 'useSelector')
    useSelectorMock.mockReturnValue({ tags: [] })
    render(<CheckboxMenu data={data} />)
    const item = screen.getByLabelText(`Item 1`)
    fireEvent.click(item)
    expect(dispatch).toHaveBeenCalledWith(
      updateFiltersSelection(data.items[0].id)
    )
  })
})
