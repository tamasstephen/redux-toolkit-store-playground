import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";
import ProductItem from "./Product";
import type { Product } from "../../../../types/product";
import { Provider } from "react-redux";
import setupStore from "../../../../app/store";

const product: Product = {
  id: 1,
  title: "Test Product",
  price: 10,
  description: "Test Description",
  category: "Test Category",
  image: "https://via.placeholder.com/150",
  rating: {
    rate: 4.5,
    count: 10,
  },
};

beforeEach(() => {
  /*   render(
    <Provider store={setupStore()}>
      <ProductItem product={product} />
    </Provider>
  ); */
});

describe("Product", () => {
  test("renders Product component", async () => {
    render(
      <Provider store={setupStore()}>
        <ProductItem product={product} />
      </Provider>
    );

    await wait(3000);
    const productCard = await screen.findAllByTestId("product-card");
    expect(productCard).toBeDefined();
    expect(true).toBe(true);
  });
});

async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
