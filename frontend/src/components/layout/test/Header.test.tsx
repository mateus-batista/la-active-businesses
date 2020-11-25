import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Header test", () => {
  const history = createMemoryHistory();

  test("should render correctly with navigation", () => {
    expect(
      render(
        <Router history={history}>
          <Header />
        </Router>
      )
    ).toMatchSnapshot();
  });

  test("should display home button", () => {
    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
