import { usePokemon } from "../../contexts/pokemon";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
import {
  Container,
  FilterSliderSkeleton,
  FilterValuesSkeleton,
  FilterValuesSkeletonBox,
  MultiRangeContainer,
} from "./styled";

export default function FilterSlider() {
  const { minPokemonCP, maxPokemonCP } = usePokemon();

  return (
    <Container>
      <span>maxCP</span>
      <MultiRangeContainer width={349}>
        {maxPokemonCP > 0 && minPokemonCP > 0 ? (
          <MultiRangeSlider
            min={minPokemonCP}
            max={maxPokemonCP}
            onChange={() => {}}
          />
        ) : (
          <FilterSliderSkeleton>
            <FilterValuesSkeleton>
              <FilterValuesSkeletonBox />
              <FilterValuesSkeletonBox />
            </FilterValuesSkeleton>
          </FilterSliderSkeleton>
        )}
      </MultiRangeContainer>
    </Container>
  );
}
