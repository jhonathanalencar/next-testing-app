import { render, screen } from "@testing-library/react";
import Home from "../page";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
  describe("Behavior", () => {
    it("should add a new todo", async () => {
      // ARRANGE
      render(<Home />);

      // ACT
      const input = screen.getByPlaceholderText("New Todo");
      await userEvent.type(input, "My new todo");

      // ASSERT
      expect(input).toHaveValue("My new todo");

      const button = screen.getByRole("button", {
        name: "Submit",
      });
      await userEvent.click(button);
      expect(input).toHaveValue("");

      const data = await screen.findByText("My new todo");
      expect(data).toHaveTextContent("My new todo");
    });

    it("should update a todo", async () => {
      // ARRANGE
      render(<Home />);

      // ACT
      const checkbox = screen.getAllByRole("checkbox")[0] as HTMLInputElement;
      expect(checkbox).not.toBeChecked();
      await userEvent.click(checkbox);

      // ASSERT
      expect(checkbox).toBeChecked();
    });

    it("should delete a todo", async () => {
      // ARRANGE
      render(<Home />);

      // ACT
      const todoText = screen.queryByText("Write Code 💻");

      // ASSERT
      expect(todoText).toBeInTheDocument();

      const button = screen.getAllByTestId("delete-button")[0];
      await userEvent.click(button);

      expect(todoText).not.toBeInTheDocument();
    });
  });
});
