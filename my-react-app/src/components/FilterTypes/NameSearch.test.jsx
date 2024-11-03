import { render, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NameSearch from './NameSearch';

describe('NameSearch', () => {
  it('renders input field with correct placeholder', () => {
    const { getByPlaceholderText } = render(<NameSearch setNameSearch={() => {}} />);
    expect(getByPlaceholderText('Name')).toBeTruthy();
  });

  it('calls setNameSearch with debounce after user input', async () => {
    vi.useFakeTimers();
    const setNameSearch = vi.fn();
    const { getByPlaceholderText } = render(<NameSearch setNameSearch={setNameSearch} />);
    
    const input = getByPlaceholderText('Name');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(setNameSearch).not.toHaveBeenCalled();
    
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    
    expect(setNameSearch).toHaveBeenCalledWith('test');
    vi.useRealTimers();
  });
}); 