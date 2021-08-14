import { usePokemon } from "../../contexts/pokemon";
import { Container, List, PokemonCardSkeleton } from "./styles";
import PokemonCard from "../PokemonCard";

interface Props {
  loading: boolean;
}

export default function PokemonList({ loading }: Props) {
  const SixteenPokemonCardSkeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];
  const { filtredPokemons } = usePokemon();
  return (
    <Container>
      <h1 className="title">Lista de Pokemons</h1>
      <h5 className="subtitle">Total Visiveis: {filtredPokemons.length}</h5>
      <List>
        {!loading
          ? filtredPokemons.map((filtredPokemons) => (
              <PokemonCard
                image={filtredPokemons.image}
                name={filtredPokemons.name}
                types={filtredPokemons.types}
                maxCP={filtredPokemons.maxCP}
                number={filtredPokemons.number}
                key={filtredPokemons.number}
              />
            ))
          : SixteenPokemonCardSkeleton.map((item, key) => (
              <PokemonCardSkeleton key={key} />
            ))}
      </List>
    </Container>
  );
}
