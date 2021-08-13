import { Container } from "./styles";
import { ReactComponent as HamburguerIcon } from "../../assets/icons/hamburguer.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";

interface Props {
  showItem: number;
  setShowItem: React.Dispatch<React.SetStateAction<number>>;
}

export default function MobileHeader({ showItem, setShowItem }: Props) {
  return (
    <Container>
      <HamburguerIcon
        width={28}
        height={26}
        className="hamburguer"
        onClick={() => {
          showItem === 1 ? setShowItem(2) : setShowItem(1);
        }}
      />
      <FilterIcon
        width={28}
        height={26}
        className="filter"
        onClick={() => {
          showItem === 3 ? setShowItem(2) : setShowItem(3);
        }}
      />
    </Container>
  );
}
