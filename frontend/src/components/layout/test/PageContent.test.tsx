import { render, screen } from "@testing-library/react";
import React from "react";
import { PageContent } from "../PageContent";

describe("PageContent test", () => {
  test("should render correctly", () => {
    expect(
      render(
        <PageContent title="Test">
          <div>Test</div>
        </PageContent>
      )
    ).toMatchSnapshot();
  });

  test("should display given title and child", () => {
    render(
      <PageContent title="Test">
        <div>Child</div>
      </PageContent>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Child")).toBeInTheDocument();
  });
});
