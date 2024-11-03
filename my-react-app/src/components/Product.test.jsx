import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product Component", () => {
  const mockProduct = {
    name: "Test Product",
    brand: "Test Brand",
    category: "Test Category",
    price: 99.99,
    rating: 4.5,
    imageUrl: "https://test-image.jpg",
  };

  it("renders product information correctly", () => {
    render(<Product product={mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.brand)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price}$`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.rating)).toBeInTheDocument();

    const image = screen.getByAltText(mockProduct.name);
    expect(image).toHaveAttribute("src", mockProduct.imageUrl);
  });
});
