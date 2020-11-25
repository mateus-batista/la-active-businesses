import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer test", () => {
  test("should render correctly", () => {
    expect(render(<Footer />)).toMatchSnapshot();
  });

  test("should contain AE Studio", () => {
    render(<Footer />);

    expect(
      screen.getByText("AE Studio", {
        exact: false,
      })
    ).toBeInTheDocument();
  });
});
