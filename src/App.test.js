import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

afterEach(() => {
    cleanup();
});

describe("running snapshot test ", () => {
    test("test snapshot of app component", () => {
        const appCmp = renderer.create(<App />).toJSON();
        expect(appCmp).toMatchSnapshot();
    });
});

it("check ADD NEW PAGE button is available in app", () => {
    render(<App />);
    const submitButton = screen.queryByText("Add New Page");
    expect(submitButton).toBeInTheDocument();
});
