import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text `Profile picture`", () => {
  render(<App />);
  const image = screen.getByAltText(/profile picture/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src');
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutMeHeading = screen.getByRole("heading", {
    name: /about me/i,
    exact: false,
    level: 2,
  });
  expect(aboutMeHeading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {
  render(<App />);
  const biography = screen.getByText(/brief introduction about yourself\./i);
  expect(biography).toBeInTheDocument();
});

test("displays a link to GitHub with the text `GitHub`", () => {
  render(<App />);
  const gitHubLink = screen.getByRole('link', { name: /github/i });
  expect(gitHubLink).toBeInTheDocument();
  expect(gitHubLink).toHaveAttribute('href');
});

test("displays a link to LinkedIn with the text `LinkedIn`", () => {
  render(<App />);
  const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute('href');
});
