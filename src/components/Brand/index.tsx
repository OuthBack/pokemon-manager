import VoltbrasLogo from "../../assets/images/voltbras_logo.png";
import { Flex, FlexDirectionVertical } from "./styles";

export default function Brand() {
  return (
    <Flex>
      <img src={VoltbrasLogo} alt="Voltbras Logo" width={52} height={52} />
      <FlexDirectionVertical>
        <h5>Voltbras App</h5>
        <p>Pokémon Manager</p>
      </FlexDirectionVertical>
    </Flex>
  );
}
