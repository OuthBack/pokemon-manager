import Brand from "../Brand";
import { Container, Rows } from "./styles";
import { ReactComponent as HamburguerIcon } from "../../assets/icons/hamburguer.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as GearsIcon } from "../../assets/icons/gears.svg";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";
import { ReactComponent as TrophyIcon } from "../../assets/icons/trophy.svg";
import { ReactComponent as XIcon } from "../../assets/icons/x-icon.svg";
import NavRow from "../NavRow";
import { Version } from "../Version";
import { MobileProps } from "../../pages";

export default function Nav({ isShowing, setShowItem }: MobileProps) {
  return (
    <Container className={isShowing ? "active" : ""}>
      <XIcon
        className="x-icon"
        onClick={() => setShowItem(2)}
        width={28}
        height={26}
      />
      <Brand />
      <Rows>
        <NavRow Icon={HamburguerIcon} title="Lista" isSelected={true} />
        <NavRow Icon={TrophyIcon} title="Conquistas" isSelected={false} />
        <NavRow Icon={DashboardIcon} title="Pokédex" isSelected={false} />
        <NavRow Icon={HelpIcon} title="Ajuda" isSelected={false} />
        <NavRow Icon={GearsIcon} title="Configuração" isSelected={false} />
        <footer>
          <Version>Versão 5.12.485</Version>
        </footer>
      </Rows>
    </Container>
  );
}
