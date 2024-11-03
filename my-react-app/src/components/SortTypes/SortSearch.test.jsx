import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react';
import SortSearch from './SortSearch';
import { sortTypes } from '../../constants/sort';

describe('SortSearch', () => {
  it('renders all sort types as buttons', () => {
    const mockSetSortSearch = vi.fn();
    render(<SortSearch sortSearch="" setSortSearch={mockSetSortSearch} />);
    
    sortTypes.forEach(sortType => {
      expect(screen.getByText(sortType)).toBeInTheDocument();
    });
  });

  it('highlights selected sort type', () => {
    const selectedSort = sortTypes[0];
    render(<SortSearch sortSearch={selectedSort} setSortSearch={vi.fn()} />);
    
    const selectedButton = screen.getByText(selectedSort);
    expect(selectedButton).toHaveClass('bg-main-color');
  });

  it('calls setSortSearch after debounce when sort type is clicked', async () => {
    vi.useFakeTimers();
    const mockSetSortSearch = vi.fn();
    render(<SortSearch sortSearch="" setSortSearch={mockSetSortSearch} />);
    
    const sortButton = screen.getByText(sortTypes[0]);
    fireEvent.click(sortButton);
    
    // Fast-forward debounce timeout
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    
    expect(mockSetSortSearch).toHaveBeenCalledWith(sortTypes[0]);
    vi.useRealTimers();
  });

  it('does not call setSortSearch immediately after click', () => {
    const mockSetSortSearch = vi.fn();
    render(<SortSearch sortSearch="" setSortSearch={mockSetSortSearch} />);
    
    const sortButton = screen.getByText(sortTypes[0]);
    fireEvent.click(sortButton);
    
    expect(mockSetSortSearch).not.toHaveBeenCalled();
  });
}); 