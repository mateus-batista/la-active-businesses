import { render } from "@testing-library/react";
import React from "react";
import App from "./App";
import { createSerializer } from "@emotion/jest";

expect.addSnapshotSerializer(createSerializer());

it("should render", () => {
  expect(render(<App />)).toMatchSnapshot();
});
