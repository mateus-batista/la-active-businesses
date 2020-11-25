import React from "react";
import { render } from "@testing-library/react";
import { Container } from "../Container";

it("should render correctly", () => {
  expect(render(<Container />)).toMatchSnapshot();
});
