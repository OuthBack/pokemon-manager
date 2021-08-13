import { usePokemon } from "../../contexts/pokemon";
import { Container, Type, TypesList } from "./styled";

export default function FilterTypes() {
  const { selectedTypes, setSelectedTypes, setSelectedTypesLength } =
    usePokemon();
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

  return (
    <Container>
      <span>Types</span>
      <TypesList>
        {types.map((type, key) => (
          <Type key={key}>
            <input
              type="checkbox"
              id={`${type}-checkbox`}
              name={`${type}-checkbox`}
              data-testid={`${type}-filter-checkbox`}
              onChange={(event) => {
                if (event.target.checked) {
                  selectedTypes.push(type);

                  setSelectedTypesLength(selectedTypes.length);
                } else {
                  const selectedFilterTypes = selectedTypes.filter(
                    (selectType) => selectType !== type
                  );
                  setSelectedTypes(selectedFilterTypes);

                  setSelectedTypesLength(selectedFilterTypes.length);
                }
              }}
            />
            <label htmlFor={`${type}-checkbox`}>{type}</label>
          </Type>
        ))}
      </TypesList>
    </Container>
  );
}
