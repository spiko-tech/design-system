import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SearchInput } from '../search-input/SearchInput.js';

type Suggestion = { id: string; label: string };

const suggestions: readonly Suggestion[] = [
  { id: '1', label: 'Apple' },
  { id: '2', label: 'Banana' },
  { id: '3', label: 'Cherry' },
];

const defaultProps = {
  suggestions,
  placeholder: 'Search...',
  emptyMessage: 'No results',
  suggestionToId: (s: Suggestion) => s.id,
  suggestionToValue: (s: Suggestion) => s.label,
  renderSuggestions: (s: Suggestion) => <span>{s.label}</span>,
};

afterEach(() => {
  cleanup();
});

describe('SearchInput', () => {
  it('renders with a value that is not present in the suggestions', () => {
    const onChange = vi.fn();
    const onSelect = vi.fn();

    render(<SearchInput {...defaultProps} value="Durian" onChange={onChange} onSelect={onSelect} />);

    const input = screen.getByPlaceholderText('Search...');
    expect(input).toHaveProperty('value', 'Durian');
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('calls onChange but not onSelect when typing a value absent from suggestions', () => {
    const onChange = vi.fn();
    const onSelect = vi.fn();
    render(<SearchInput {...defaultProps} value="" onChange={onChange} onSelect={onSelect} />);

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'Zucchini' } });

    expect(onChange).toHaveBeenCalledWith('Zucchini');
    expect(onSelect).not.toHaveBeenCalled();
  });
});
