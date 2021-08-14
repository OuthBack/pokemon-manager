import { gql, useQuery } from "@apollo/client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Pokemon {
  image: string;
  name: string;
  types: string[];
  maxCP: number;
  number: string;
}

export interface PokemonProviderProps {
  children?: React.ReactNode;
  pokemon: Pokemon[];
}

interface PokemonContextData {
  loading: boolean;
  minPokemonCP: number;
  maxPokemonCP: number;
  setMin: (min: number) => void;
  setMax: (max: number) => void;
  filtredPokemons: Pokemon[];
  filterPokemons: (selectedTypes: string[]) => Pokemon[];
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
  setSelectedTypesLength: (number: number) => void;
}

export const types = [
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

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData
);

const getPokemonsQuery = gql`
  query {
    pokemons(first: 999999999) {
      id
      name
      number
      types
      image
      maxCP
    }
  }
`;

export const PokemonProvider = ({
  children,
  pokemon,
}: PokemonProviderProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>(pokemon);
  const [filtredPokemons, setFiltredPokemons] = useState<Pokemon[]>([]);
  const [minPokemonCP, setMinPokemonCP] = useState(0);
  const [maxPokemonCP, setMaxPokemonCP] = useState(0);
  const { loading, error, data } = useQuery(getPokemonsQuery);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(9999);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(types);
  const [selectedTypesLength, setSelectedTypesLength] = useState(0);

  const getPokemons = useCallback(() => {
    if (!loading && !error) {
      setPokemons(data.pokemons);
    }
  }, [data, error, loading]);

  const filterPokemons = useCallback(
    (selectedTypes: string[]) =>
      pokemons.filter(
        (pokemon) =>
          min <= pokemon.maxCP &&
          pokemon.maxCP <= max &&
          pokemon.types.filter((type) => selectedTypes.includes(type)).length >
            0
      ),

    [pokemons, max, min]
  );

  useEffect(() => {
    if (pokemon.length === 0) getPokemons();
    const cpArray = pokemons.map((pokemon: Pokemon) => pokemon.maxCP);
    const maxCP = Math.max(...cpArray);
    const minCP = Math.min(...cpArray);
    setMaxPokemonCP(maxCP);
    setMinPokemonCP(minCP);
    setMax(maxCP);
    setMin(minCP);
  }, [getPokemons, pokemon, pokemons]);

  useEffect(() => {
    setFiltredPokemons(filterPokemons(selectedTypes));
  }, [min, max, selectedTypesLength, filterPokemons, selectedTypes]);

  useEffect(() => {
    setFiltredPokemons(pokemons);
  }, [pokemons]);

  return (
    <PokemonContext.Provider
      value={{
        loading,
        minPokemonCP,
        maxPokemonCP,
        filtredPokemons,
        filterPokemons,
        setMin,
        setMax,
        selectedTypes,
        setSelectedTypes,
        setSelectedTypesLength,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("usePokemon must be used within an PokemonProvider");
  }

  return context;
}

const defaultExport = { PokemonProvider, usePokemon };

export default defaultExport;
