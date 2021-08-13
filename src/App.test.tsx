import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import HomePage from "./components/HomePage/styles";
import Home from "./pages";

test("pokemons listados filtra elementos", async () => {
  const types = ["Normal", "Fire", "Fighting", "Water"];
  render(<App />);

  const matchType = (type: string) => {
    const checkbox = screen.getByTestId(`${type}-filter-checkbox`);

    userEvent.click(checkbox); // Check

    expect(checkbox).toBeChecked();
    const pokemonlist = screen.getAllByTestId("pokemon-type");
    pokemonlist.forEach((pokemon) =>
      expect(pokemon.innerHTML).toMatch(new RegExp(`${type}`))
    );

    userEvent.click(checkbox); // Uncheck

    expect(checkbox).not.toBeChecked();
  };

  await waitFor(() => types.forEach((type) => matchType(type)));
});
