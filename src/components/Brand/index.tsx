import { ReactComponent as VoltbrasLogo } from "../../assets/icons/voltbras.svg";
import { Flex, FlexDirectionVertical } from "./styles";

export default function Brand() {
  return (
    <Flex>
      <VoltbrasLogo width={52} height={52} />
      <FlexDirectionVertical>
        <h5>Voltbras App</h5>
        <p>Pokémon Manager</p>
      </FlexDirectionVertical>
    </Flex>
  );
}
