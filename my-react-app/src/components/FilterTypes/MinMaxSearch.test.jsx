import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import MinMaxSearch from "./MinMaxSearch";
import { act } from "react";

describe("MinMaxSearch", () => {
  const mockSetRangeValue = vi.fn();
  const defaultRangeValue = { min: null, max: null };

  beforeEach(() => {
    vi.useFakeTimers();
    mockSetRangeValue.mockClear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders with empty inputs initially", () => {
    render(
      <MinMaxSearch
        setRangeValue={mockSetRangeValue}
        rangeValue={defaultRangeValue}
      />
    );

    const minInput = screen.getByPlaceholderText("Min");
    const maxInput = screen.getByPlaceholderText("Max");

    expect(minInput.value).toBe("");
    expect(maxInput.value).toBe("");
  });

  it("renders with provided values", () => {
    const initialValues = { min: 10, max: 20 };
    render(
      <MinMaxSearch
        setRangeValue={mockSetRangeValue}
        rangeValue={initialValues}
      />
    );

    const minInput = screen.getByPlaceholderText("Min");
    const maxInput = screen.getByPlaceholderText("Max");

    expect(minInput.value).toBe("10");
    expect(maxInput.value).toBe("20");
  });

  it("updates min value with debounce", async () => {
    render(
      <MinMaxSearch
        setRangeValue={mockSetRangeValue}
        rangeValue={defaultRangeValue}
      />
    );

    const minInput = screen.getByPlaceholderText("Min");
    fireEvent.change(minInput, { target: { value: "15" } });

    expect(mockSetRangeValue).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(mockSetRangeValue).toHaveBeenCalledWith({ min: 15, max: null });
  });

  it("updates max value with debounce", async () => {
    render(
      <MinMaxSearch
        setRangeValue={mockSetRangeValue}
        rangeValue={defaultRangeValue}
      />
    );

    const maxInput = screen.getByPlaceholderText("Max");
    fireEvent.change(maxInput, { target: { value: "25" } });

    expect(mockSetRangeValue).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(mockSetRangeValue).toHaveBeenCalledWith({ min: null, max: 25 });
  });
});
