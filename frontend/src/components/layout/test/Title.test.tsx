import { render } from "@testing-library/react";
import React from "react";
import { Title } from "../Title";

describe("Title test", () => {
  test("should render correctly", () => {
    expect(render(<Title />)).toMatchSnapshot();
  });
});
