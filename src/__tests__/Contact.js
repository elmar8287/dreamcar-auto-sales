import React from 'react';
import { render } from "@testing-library/react";
import Contact from "../components/Contact/Contact";

describe("Contact companent", ()=> {
  test("Contact form renders", ()=> {
    render(<Contact />);
  });
});