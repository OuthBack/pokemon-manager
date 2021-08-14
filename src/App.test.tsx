import {
  cleanup,
  fireEvent,
  render,
  screen,
  wait,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PokemonList from "./components/PokemonList";
import Filter from "./components/Filter";
import FilterSlider from "./components/FilterSlider";

import AppProvider from "./contexts";

const pokemons = [
  {
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    maxCP: 100,
    name: "Pokemon1",
    number: "001",
    types: ["Grass", "Poison"],
  },
  {
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    maxCP: 300,
    name: "Pokemon2",
    number: "002",
    types: ["Grass", "Fire"],
  },
  {
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    maxCP: 500,
    name: "Pokemon3",
    number: "003",
    types: ["Flying", "Water"],
  },
];

const filterTypes = ["Flying", "Water"];

const types = [
  "Normal",
  "Fire",
  "Fighting",
  "Water",
  "Flying",
  "Grass",
  "Poison",
  "Electric",
  "Ground",
  "Psychic",
  "Rock",
  "Ice",
  "Bug",
  "Dragon",
  "Ghost",
  "Dark",
  "Steel",
  "Fairy",
];

afterEach(cleanup);
describe("Filter Tests", () => {
  it("desmarca os tipos do filtro", async () => {
    render(
      <AppProvider pokemon={[]}>
        <Filter isShowing={true} />
      </AppProvider>
    );
    const unCheck = (types: string[]) => {
      types.forEach((type) => {
        const checkbox = screen.getByAltText(new RegExp(`${type}-checkbox`));
        expect(checkbox).toBeInTheDocument();
        fireEvent.click(checkbox); // Uncheck
        expect(checkbox).not.toBeChecked();
      });
    };

    await waitFor(() => unCheck(types));
  });

  it("filtro de tipos filtra pokemons listados", async () => {
    render(
      <AppProvider pokemon={pokemons}>
        <PokemonList loading={false} />
        <Filter isShowing={true} />
      </AppProvider>
    );

    const unCheck = async () => {
      const flyingType = screen.getByAltText(`${filterTypes[0]}-checkbox`);
      const waterType = screen.getByAltText(`${filterTypes[1]}-checkbox`);

      await waitFor(() => fireEvent.click(flyingType)); // Uncheck
      await waitFor(() => fireEvent.click(waterType)); // Uncheck
    };

    const matchType = () => {
      const pokemonTypeList = screen.getAllByTestId("pokemon-type");

      filterTypes.map((type) => {
        pokemonTypeList.forEach((pokemonType) =>
          expect(pokemonType.innerHTML).not.toMatch(new RegExp(`${type}`))
        );
      });
    };

    await waitFor(() => {
      unCheck();
    });

    await waitFor(() => {
      matchType();
    });
  });

  it("filtro de CP setando mínimo e máximo", async () => {
    render(
      <AppProvider pokemon={pokemons}>
        <FilterSlider />
      </AppProvider>
    );

    const setMaxAndMinCP = () => {
      const minCp = screen.getByAltText("min-cp") as HTMLInputElement;
      const maxCp = screen.getByAltText("max-cp") as HTMLInputElement;

      fireEvent.change(minCp, { target: { value: 150 } });
      fireEvent.change(maxCp, { target: { value: 400 } });

      expect(minCp.value).toBe("150");
      expect(maxCp.value).toBe("400");
    };

    await waitFor(() => setMaxAndMinCP());
  });

  it("filtro de CP filtra pokemons listados", async () => {
    render(
      <AppProvider pokemon={pokemons}>
        <PokemonList loading={false} />
        <Filter isShowing={true} />
      </AppProvider>
    );

    const pokemonMinCp = 150;
    const pokemonMaxCp = 400;

    const setMaxAndMinCP = () => {
      const minCp = screen.getByAltText("min-cp") as HTMLInputElement;
      const maxCp = screen.getByAltText("max-cp") as HTMLInputElement;

      fireEvent.change(minCp, { target: { value: 150 } });
      fireEvent.change(maxCp, { target: { value: 400 } });
    };

    const matchCP = () => {
      const pokemonCpList = screen.getAllByTestId("pokemon-cp");

      pokemonCpList.forEach((pokemonCp) => {
        expect(parseInt(pokemonCp.innerHTML)).toBeGreaterThanOrEqual(
          pokemonMinCp
        );
        expect(parseInt(pokemonCp.innerHTML)).toBeLessThanOrEqual(pokemonMaxCp);
      });
    };

    await waitFor(() => setMaxAndMinCP());
    await waitFor(() => matchCP());
  });
});
