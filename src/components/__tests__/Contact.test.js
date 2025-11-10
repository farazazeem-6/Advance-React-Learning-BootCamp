import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test("Testing the contact component", () => {
//   render(<Contact />);
//   const heading = screen.getByRole("heading");
//   expect(heading).toBeInTheDocument();
// });

// test("Testing the button in the  contact component", () => {
//   render(<Contact />);
//   const button = screen.getByRole("button");
//   expect(button).toBeInTheDocument();
// });

//this describe is like a good practice as it seems that ahh ok we are testing for this particular component so in its block or body we will check this component tests.
describe("Testing Contact Component", () => {
  test("Testing the contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  //we are also use "it" keyword in place of "test"
  it("Testing the button in the  contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
