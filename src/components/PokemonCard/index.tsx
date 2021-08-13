import { Pokemon } from "../../contexts/pokemon";
import {
  Container,
  CPContainer,
  InnerContainer,
  TextContainer,
  TopText,
} from "./styles";

export default function PokemonCard({
  name,
  types,
  image,
  maxCP,
  number,
}: Pokemon) {
  return (
    <Container>
      <InnerContainer>
        <img src={image} alt="Pokemon" className="pokemon" />

        <TextContainer>
          <TopText>
            <h5>{name}</h5>
            <span>{number}</span>
          </TopText>

          <p data-testid="pokemon-type">{types?.join(", ")}</p>
          <CPContainer maxCP={maxCP}>
            <span>{maxCP}</span>
          </CPContainer>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
}
