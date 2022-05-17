import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact/Contact";

describe("Contact companent", ()=> {
  it("Contact form renders", ()=> {
    render(<Contact />);
  });
  it("Is there a button to submit", ()=> {
    const buttonAvailable = screen.findAllByDisplayValue("Send");
    expect(buttonAvailable).toHaveValue;
  });
});