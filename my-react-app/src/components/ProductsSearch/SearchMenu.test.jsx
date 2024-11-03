import { render, screen, fireEvent } from "@testing-library/react";
import SearchMenu from "./SearchMenu";
import { getProducts } from "../../data/getProducts";

vi.mock("react-use", () => ({
  useLocalStorage: vi.fn((key, initialValue) => [initialValue, vi.fn()]),
  useDebounce: vi.fn(),
}));

vi.mock("../../data/getProducts", () => ({
  getProducts: vi.fn(),
}));

describe("SearchMenu", () => {
  const defaultProps = {
    openMenuProduct: true,
    setOpenMenuProducts: vi.fn(),
    setProducts: vi.fn(),
    setLoading: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls setOpenMenuProducts when close button is clicked", () => {
    render(<SearchMenu {...defaultProps} />);

    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);

    expect(defaultProps.setOpenMenuProducts).toHaveBeenCalledWith(false);
  });

  it("calls getProducts with correct parameters on mount", () => {
    render(<SearchMenu {...defaultProps} />);

    expect(getProducts).toHaveBeenCalledWith({
      nameSearch: "",
      priceSearch: { min: 0, max: 10000 },
      categoriesSearch: [],
      ratingSearch: { min: 0, max: 5 },
      sortSearch: "High Rate",
      setProducts: defaultProps.setProducts,
      setLoading: defaultProps.setLoading,
    });
  });
});
