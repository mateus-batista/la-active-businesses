import { render } from "@testing-library/react";
import React from "react";
import { Main } from "../Main";

describe("Main test", () => {
  test("should render correctly", () => {
    expect(render(<Main />)).toMatchSnapshot();
  });
});
