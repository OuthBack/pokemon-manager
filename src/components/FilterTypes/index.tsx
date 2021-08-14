import { types, usePokemon } from "../../contexts/pokemon";
import { Container, Type, TypesList } from "./styled";

export default function FilterTypes() {
  const { selectedTypes, setSelectedTypes, setSelectedTypesLength } =
    usePokemon();

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
              alt={`${type}-checkbox`}
              defaultChecked={true}
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
