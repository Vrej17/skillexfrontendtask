import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CategorySearch from "./CategorySearch";
import { categoryTypes } from "../../constants/categories";

describe("CategorySearch Component", () => {
  it("renders without crashing", () => {
    render(<CategorySearch setCategoriesSearch={() => {}} />);
    console.log(screen.getByText("CATEGORY").className);

    expect(screen.getByText("CATEGORY")).toBeInTheDocument();
  });

  it("renders all category types from constants", () => {
    render(<CategorySearch setCategoriesSearch={() => {}} />);

    categoryTypes.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("updates selected categories when clicking on category labels", async () => {
    const setCategoriesSearch = vi.fn();
    render(<CategorySearch setCategoriesSearch={setCategoriesSearch} />);

    const firstCategory = screen.getByText(categoryTypes[0]);
    fireEvent.click(firstCategory);

    expect(firstCategory).toHaveClass("bg-main-color");
    expect(firstCategory).toHaveClass("text-white");

    await new Promise((resolve) => setTimeout(resolve, 1100));

    expect(setCategoriesSearch).toHaveBeenCalledWith([categoryTypes[0]]);
  });

  it("removes category when clicking selected category again", async () => {
    const setCategoriesSearch = vi.fn();
    render(<CategorySearch setCategoriesSearch={setCategoriesSearch} />);

    const category = screen.getByText(categoryTypes[0]);
    fireEvent.click(category);
    fireEvent.click(category);

    await new Promise((resolve) => setTimeout(resolve, 1100));

    expect(setCategoriesSearch).toHaveBeenLastCalledWith([]);
  });

  it("handles multiple category selections", async () => {
    const setCategoriesSearch = vi.fn();
    render(<CategorySearch setCategoriesSearch={setCategoriesSearch} />);

    const category1 = screen.getByText(categoryTypes[0]);
    const category2 = screen.getByText(categoryTypes[1]);

    fireEvent.click(category1);
    fireEvent.click(category2);

    await new Promise((resolve) => setTimeout(resolve, 1100));

    expect(setCategoriesSearch).toHaveBeenLastCalledWith([
      categoryTypes[0],
      categoryTypes[1],
    ]);
  });

  it("applies correct styling to selected and unselected categories", () => {
    render(<CategorySearch setCategoriesSearch={() => {}} />);

    const category = screen.getByText(categoryTypes[0]);

    expect(category).toHaveClass("bg-transparent");
    expect(category).toHaveClass("text-black/60");

    fireEvent.click(category);
    expect(category).toHaveClass("bg-main-color");
    expect(category).toHaveClass("text-white");
  });
});
