import Jest from "../../Jest";
import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";

test("페이지가 제대로 뜨나요?", async () => {
  render(<Jest />);
  const button = await screen.findByRole("button");
  expect(button.innerHTML).toBe("우지수");
});
